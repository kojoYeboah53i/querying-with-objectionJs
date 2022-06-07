const { Model} = require ('objection');
const Knex = require('knex');

//create  connection
const knex =  Knex({
    client: 'mysql',
    connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'objectionjs'
    }
});


// give the connection to objection
Model.knex(knex);

module.export = knex;

