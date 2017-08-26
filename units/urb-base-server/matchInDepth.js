// @flow

export default function matchInDepth( payload: Object, condition: Object ) {
  for ( let ix in condition ) {
    const payloadValue = payload[ix]
    const typeOfValue = typeof payloadValue

    const conditionValue = condition[ix]
    const typeOfCondition = typeof conditionValue

    if ( typeOfValue !== typeOfCondition ) return false

    if ( typeOfCondition === 'object' ) {
      if ( !matchInDepth( payloadValue, conditionValue ) ) return false
    } else {
      if ( payloadValue !== conditionValue ) return false
    }
  }

  return true
}
