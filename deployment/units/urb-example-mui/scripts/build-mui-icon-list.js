var fs=require('fs');
var rrs=require('recursive-readdir-sync');

var importsSource=[];
var cardItemsSource=[];
var key=0;

rrs('./node_modules/material-ui/svg-icons/').forEach(function(file){
if(
file!=='node_modules/material-ui/svg-icons/index-generator.js'&&
file!=='node_modules/material-ui/svg-icons/index.js')
{
console.log('📖  Reading '+file);
var fileLines=fs.readFileSync(file,'utf8').split('\n');
var index=0,
found=false;




while(found===false&&index<fileLines.length){
if(fileLines[index].indexOf('exports.default = ')>-1){
var fileName=file.substring(0,file.length-3).replace('node_modules/','');
var moduleName=fileLines[index].replace('exports.default = ','').replace(';','').trim();

importsSource.push('import '+moduleName+' from \''+fileName+'\';');
cardItemsSource.push('            <ListItem key="'+
key++ +'" primaryText="'+moduleName+'" secondaryText="'+fileName+'" leftIcon={<'+moduleName+' />} />');

cardItemsSource.push('            <Divider inset={true} />');

found=true;
}else index++;
}
}
});

var sourceCode=['// @flow','','import React from \'react\';','import Relay from \'react-relay\';','','import {Card} from \'material-ui/Card\';','import {List, ListItem} from \'material-ui/List\';','import Divider from \'material-ui/Divider\';','',









importsSource.join('\n'),'','class MUI_Icons extends React.Component','{','  render( )','  {','    return (','      <div>','        <Card>','          <List>',










cardItemsSource.join('\n'),'          </List>','        </Card>','      </div>','    )','  }','}','','export default Relay.createContainer(MUI_Icons, {','  fragments: {','    Viewer: () => Relay.QL`','      fragment on Viewer {','        User_IsAnonymous,','      }','    `,','  },','});'];




















fs.writeFileSync('./units/urb-example-mui/webapp/components/MUI_Icons.js',sourceCode.join('\n'));
//# sourceMappingURL=build-mui-icon-list.js.map