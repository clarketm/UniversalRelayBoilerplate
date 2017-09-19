'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _cassandraDriver = require('cassandra-driver');var _cassandraDriver2 = _interopRequireDefault(_cassandraDriver);
var _expressCassandra = require('express-cassandra');var _expressCassandra2 = _interopRequireDefault(_expressCassandra);

var _CassandraOptions = require('./CassandraOptions');var _CassandraOptions2 = _interopRequireDefault(_CassandraOptions);
var _WinstonCassandra = require('./WinstonCassandra');var _WinstonCassandra2 = _interopRequireDefault(_WinstonCassandra);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const Uuid = _cassandraDriver2.default.types.Uuid;
const Uuid_Null_String = '00000000-0000-0000-0000-000000000000';
const Uuid_Null = Uuid.fromString(Uuid_Null_String);

const ExpressCassandraClient = _expressCassandra2.default.createClient({
  clientOptions: _CassandraOptions2.default, // Options are pre-set in a separate part of the application, they are correct
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1 },

    migration: 'alter',
    disableTTYConfirmation: true,
    createKeyspace: true } });



class PersisterCassandra {


  constructor() {
    this.tableSchemas = new Map();
  }

  getOneObject(
  entityName,
  ObjectType,
  filters)
  {
    const resultPromises = [];

    for (let filter of filters)
    resultPromises.push(
    new Promise((resolve, reject) => {
      this.updateUuidsInFields(entityName, filter);
      ExpressCassandraClient.instance[entityName].findOne(
      filter,
      {
        raw: true,
        allow_filtering: true },

      (err, entity) => {
        if (err) reject(err);else
        {
          if (entity != null) resolve(new ObjectType(entity));else
          resolve(null);
        }
      });

    }));


    return Promise.all(resultPromises);
  }

  getObjectList(
  entityName,
  ObjectType,
  filters)
  {
    const resultPromises = [];

    for (let filter of filters)
    resultPromises.push(
    new Promise((resolve, reject) => {
      this.updateUuidsInFields(entityName, filter);
      ExpressCassandraClient.instance[entityName].find(
      filter,
      {
        raw: true,
        allow_filtering: true },

      (err, arrEntities) => {
        if (err) reject(err);else
        {
          const arrRetObj = [];
          for (let entity of arrEntities)
          arrRetObj.push(new ObjectType(entity));
          resolve(arrRetObj);
        }
      });

    }));


    return Promise.all(resultPromises);
  }

  updateUuidsInFields(entityName, fields) {
    const schemaFields =
    ExpressCassandraClient.instance[entityName]._properties.schema.fields;
    for (let fieldName in fields) {
      const fieldType = schemaFields[fieldName];
      if (fieldType === 'uuid') {
        const fieldValue = fields[fieldName];
        if (!(fieldValue instanceof Uuid))
        fields[fieldName] = Uuid.fromString(fieldValue);
      }
    }
  }

  add(entityName, fields) {
    this.updateUuidsInFields(entityName, fields);

    return new Promise((resolve, reject) => {
      const entity = new ExpressCassandraClient.instance[entityName](fields);
      entity.save(err => {
        if (err) reject(err);else
        resolve();
      });
    });
  }

  update(entityName, fields) {
    // TODO x2000 Optimize this with update, possibly. Maybe it's not so bad to read first after all
    return this.add(entityName, fields);
  }

  remove(entityName, fields) {
    this.updateUuidsInFields(entityName, fields);

    return new Promise((resolve, reject) => {
      ExpressCassandraClient.instance[entityName].delete(fields, err => {
        if (err) reject(err);else
        resolve();
      });
    });
  }

  createLogger() {
    return new _WinstonCassandra2.default(_CassandraOptions2.default);
  }

  uuidFromString(str) {
    return Uuid.fromString(str);
  }

  uuidRandom() {
    return Uuid.random();
  }

  uuidNull() {
    return Uuid_Null;
  }

  uuidNullAsString() {
    return Uuid_Null_String;
  }

  uuidToString(id) {
    if (id instanceof Uuid) id = id.toString();

    return id;
  }

  uuidEquals(id1, id2) {
    return id1.equals(id2);
  }

  addTableSchema(tableName, tableSchema) {
    if (this.tableSchemas) this.tableSchemas.set(tableName, tableSchema);else
    {
      console.error(
      '💔 Attempting to add table schemas after express-cassandra client connect.');

      process.exit(1);
    }
  }

  confirmHealth() {
    return new Promise((resolve, reject) => {
      ExpressCassandraClient.modelInstance.User.get_cql_client(
      (err, client) => {
        if (err) reject(err);else

        client.execute(
        'select release_version from system.local;',
        (err, result) => {
          if (err) reject(err);else
          resolve();
        });

      });

    });
  }

  initialize(runAsPartOfSetupDatabase, cb) {
    // All table schemas should have been added by now.
    const enrolledTables = this.tableSchemas;
    this.tableSchemas = null; // Free up the memory that is not needed any more and indicate that we can not add any more

    ExpressCassandraClient.connect(err => {
      if (err) {
        console.log('💔 Could not connect to Cassandra: ' + err.message);
        setTimeout(() => process.exit(1), 5000); // Exit the process. A process manager like pm2 would re-start
      } else if (!enrolledTables) console.log('💔 Table schemas missing!');else
      {
        const arrSchemas = [];
        for (let tableName of enrolledTables.keys())
        arrSchemas.push([tableName, enrolledTables.get(tableName)]);

        this.loadOneTableSchemaFromArray(
        arrSchemas,
        runAsPartOfSetupDatabase,
        cb);

      }
    });
  }

  loadOneTableSchemaFromArray(
  arrSchemas,
  runAsPartOfSetupDatabase,
  cb)
  {
    if (arrSchemas.length > 0) {
      const tableName = arrSchemas[0][0];
      const tableSchema = arrSchemas[0][1];

      arrSchemas.splice(0, 1);

      ExpressCassandraClient.loadSchema(tableName, tableSchema, err => {
        if (err) {
          console.log(
          '💔 Initializing Cassandra persister - error while creating ' +
          tableName +
          '!');

          console.error(err.message);
          process.exit(1);
        } else {
          if (runAsPartOfSetupDatabase)
          console.log(
          '🛢 Table ' +
          ExpressCassandraClient.modelInstance[tableName]._properties.
          name +
          ' ready.');


          this.loadOneTableSchemaFromArray(
          arrSchemas,
          runAsPartOfSetupDatabase,
          cb);
          // Load the next table
          return;
        }
      });
    } else {
      cb();
    }
  }}exports.default = PersisterCassandra;
//# sourceMappingURL=PersisterCassandra.js.map