/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('channel', table => {
        table.increments();
        table.string('name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('user', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.integer('channelId').notNullable().references('id').inTable('channel');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('video', table => {
        table.increments();
        table.string('title').notNullable();
        table.integer('channelId').notNullable().references('id').inTable('channel');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('video')
    .dropTable('user')  
    .dropTable('channel');

  
};
