// const sqlite3 = require('sqlite3').verbose();

const { Model} = require ('objection');
const Knex = require('knex');
const path = require('path');

//create  connection
const knex =  Knex({
    client: 'sqlite3',
    connection: {
    filename: './db.sqlite'
    },
    useNullAsDefault: true
});


// give the connection to objection
Model.knex(knex);

module.export = knex;

