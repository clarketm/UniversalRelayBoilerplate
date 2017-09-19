'use strict';Object.defineProperty(exports, "__esModule", { value: true });

const Uuid_Null = '00000000-0000-0000-0000-000000000000';

class PersisterElasticSearch {


  constructor() {
    this.stores = {};
  }

  getStore(entityName) {
    if (entityName in this.stores) return this.stores[entityName];else
    return this.stores[entityName] = [];
  }

  findIndexes(entityName, filter) {
    const store = this.getStore(entityName);
    const arr_Indexes = [];

    for (let [objectInStore, index] of store) {
      let filterMatched = true;
      for (let filterField in filter)
      if (objectInStore[filterField] !== filter[filterField]) {
        filterMatched = false;
        break;
      }

      if (filterMatched) arr_Indexes.push(index);
    }

    return arr_Indexes;
  }

  findObjects(entityName, filter) {
    const store = this.getStore(entityName);
    const arr_Objects = [];

    store.map(objectInStore => {
      let filterMatched = true;
      for (let filterField in filter)
      if (objectInStore[filterField] !== filter[filterField]) {
        filterMatched = false;
        break;
      }

      if (filterMatched) arr_Objects.push(objectInStore);
    });

    return arr_Objects;
  }

  getOneObject(
  entityName,
  ObjectType,
  filters)
  {
    const arr_Objects = filters.map(
    filter => this.findObjects(entityName, filter)[0]);

    return Promise.resolve(arr_Objects);
  }

  getObjectList(
  entityName,
  ObjectType,
  filters)
  {
    const arr_arr_Objects = filters.map(filter =>
    this.findObjects(entityName, filter));

    return Promise.resolve(arr_arr_Objects);
  }

  add(entityName, fields, ObjectType) {
    const store = this.getStore(entityName);
    const newObject = new ObjectType(fields);

    store.push(newObject);

    return Promise.resolve();
  }

  update(entityName, fields) {
    // Only use the ID to find the record to delete
    const newFields = {};
    newFields.id = fields.id;

    const an_Object = this.findObjects(entityName, newFields)[0];

    for (let fieldName in fields) an_Object[fieldName] = fields[fieldName];

    return Promise.resolve();
  }

  remove(entityName, fields) {
    const store = this.getStore(entityName);

    const indexToDelete = this.findIndexes(entityName, fields)[0];
    store.splice(indexToDelete, 1);

    return Promise.resolve();
  }

  createLogger() {
    return null; // No need for logger, by default it will output to console in dev mode
  }

  uuidFromString(str) {
    return str;
  }

  uuidRandom() {
    return '';
  }

  uuidNull() {
    return Uuid_Null;
  }

  uuidNullAsString() {
    return Uuid_Null;
  }

  uuidToString(id) {
    // ids are always strings anyway
    return id;
  }

  uuidEquals(id1, id2) {
    return id1 === id2;
  }

  addTableSchema(tableName, tableSchema) {
    // Nothing to do, it's all in memory
  }

  confirmHealth() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  initialize(runAsPartOfSetupDatabase, cb) {
    // Nothing to do, it's all in memory
    cb();
  }}exports.default = PersisterElasticSearch;
//# sourceMappingURL=PersisterElasticSearch.js.map