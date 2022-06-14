// Update with your config settings.
//knessnakecase
const {knexSnakeCaseMapper} = require('objection'); 
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'objection',
      user:     'Isaac',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds : {
      directory: './seeds'
    },
    ...knexSnakeCaseMapper,
  },

};