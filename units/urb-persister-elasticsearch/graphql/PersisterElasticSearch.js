// @flow

import uuid from 'node-uuid'

const Uuid_Null = '00000000-0000-0000-0000-000000000000'

export default class PersisterElasticSearch {
  stores: Object

  constructor() {
    this.stores = {}
  }

  getStore( entityName: string ) {
    if ( entityName in this.stores ) return this.stores[entityName]
    else return ( this.stores[entityName] = [])
  }

  findIndexes( entityName: string, filter: Object ) {
    const store = this.getStore( entityName )
    const arr_Indexes = []

    for ( let [ objectInStore, index ] of store ) {
      let filterMatched = true
      for ( let filterField in filter )
        if ( objectInStore[filterField] !== filter[filterField]) {
          filterMatched = false
          break
        }

      if ( filterMatched ) arr_Indexes.push( index )
    }

    return arr_Indexes
  }

  findObjects( entityName: string, filter: Object ) {
    const store = this.getStore( entityName )
    const arr_Objects = []

    store.map( objectInStore => {
      let filterMatched = true
      for ( let filterField in filter )
        if ( objectInStore[filterField] !== filter[filterField]) {
          filterMatched = false
          break
        }

      if ( filterMatched ) arr_Objects.push( objectInStore )
    })

    return arr_Objects
  }

  getOneObject(
    entityName: string,
    ObjectType: any,
    filters: Array<any>
  ): Promise<any> {
    const arr_Objects = filters.map(
      filter => this.findObjects( entityName, filter )[0]
    )
    return Promise.resolve( arr_Objects )
  }

  getObjectList(
    entityName: string,
    ObjectType: any,
    filters: Array<any>
  ): Promise<Array<any>> {
    const arr_arr_Objects = filters.map( filter =>
      this.findObjects( entityName, filter )
    )
    return Promise.resolve( arr_arr_Objects )
  }

  add( entityName: string, fields: any, ObjectType: any ): Promise<any> {
    const store = this.getStore( entityName )
    const newObject = new ObjectType( fields )

    store.push( newObject )

    return Promise.resolve()
  }

  update( entityName: string, fields: any ): Promise<null> {
    // Only use the ID to find the record to delete
    const newFields = {}
    newFields.id = fields.id

    const an_Object = this.findObjects( entityName, newFields )[0]

    for ( let fieldName in fields ) an_Object[fieldName] = fields[fieldName]

    return Promise.resolve()
  }

  remove( entityName: string, fields: any ): Promise<null> {
    const store = this.getStore( entityName )

    const indexToDelete = this.findIndexes( entityName, fields )[0]
    store.splice( indexToDelete, 1 )

    return Promise.resolve()
  }

  createLogger() {
    return null // No need for logger, by default it will output to console in dev mode
  }

  uuidFromString( str: string ): string {
    return str
  }

  uuidRandom(): string {
    return uuid.v1()
  }

  uuidNull() {
    return Uuid_Null
  }

  uuidNullAsString() {
    return Uuid_Null
  }

  uuidToString( id: any ) {
    // ids are always strings anyway
    return id
  }

  uuidEquals( id1: any, id2: any ): boolean {
    return id1 === id2
  }

  addTableSchema( tableName: string, tableSchema: Object ): void {
    // Nothing to do, it's all in memory
  }

  confirmHealth(): Promise<null> {
    return new Promise( ( resolve, reject ) => {
      resolve()
    })
  }

  initialize( runAsPartOfSetupDatabase: boolean, cb: Function ): void {
    // Nothing to do, it's all in memory
    cb()
  }
}
