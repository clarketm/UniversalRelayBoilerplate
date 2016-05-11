import React, {Component} from 'react';
import EventListener from 'react-event-listener';

export const SMALL = 1;
export const MEDIUM = 2;
export const LARGE = 3;

export default function withWidth(options = {}) {
  const {
    resizeInterval = 166,
  } = options;

  return (MyComponent) => {
    return class WithWidth extends Component {
      constructor( props )
      {
        super( props )
        this.state = {
          width: this.getWidth(),
        };
      }

      componentDidMount() {
        this.updateWidth();
      }

      componentWillUnmount() {
        clearTimeout(this.deferTimer);
      }

      handleResize = () => {
        clearTimeout(this.deferTimer);
        this.deferTimer = setTimeout(() => {
          this.updateWidth();
        }, resizeInterval);
      };

      getWidth() {
        const innerWidth = window.innerWidth;
        let width;

        if (innerWidth >= 992) {
          width = LARGE;
        } else if (innerWidth >= 768) {
          width = MEDIUM;
        } else { // innerWidth < 768
          width = SMALL;
        }

        return width;
      }

      updateWidth() {
        let width = this.getWidth();

        if (width !== this.state.width) {
          this.setState({
            width: width,
          });
        }
      }

      render() {
        return (
          <EventListener target="window" onResize={this.handleResize}>
            <MyComponent
              {...this.props}
              width={this.state.width}
            />
          </EventListener>
        );
      }
    };
  };
}
