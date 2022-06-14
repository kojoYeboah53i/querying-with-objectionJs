/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  //truncate all tables
  await knex.raw('TRUNCATE TABLE "channel" CASCADE ');
  await knex.raw('TRUNCATE TABLE "user" CASCADE ');
  await knex.raw('TRUNCATE TABLE "video" CASCADE ');
  await knex.raw('TRUNCATE TABLE "orders" CASCADE ');
  await knex.raw('TRUNCATE TABLE "customers" CASCADE ');

  //insert data
  await knex('channel').insert([
    { id : 1, name : 'Channel 1' },
    { id : 2, name : 'Channel 2' },
    { id : 3, name : 'Channel 3' },

   ]);

   //insert user data
    await knex('user').insert([
      { id : 1, name : 'User 1', email : 'user1@test.com', channelId : 1 },
      { id : 2, name : 'User 2', email : 'user2@test.com', channelId : 2 },
      { id : 3, name : 'User 3', email : 'user3@test.com' , channelId : 2 },
      { id : 4, name : 'User 4', email : 'user4@test.com'   , channelId : 1 },
    ]);

    //insert video data
    await knex('video').insert([
      { id : 1, title : 'Video 1', channelId : 1 },
      { id : 2, title : 'Video 2', channelId : 2 },
      { id : 3, title : 'Video 3', channelId : 2 },
      { id : 4, title : 'Video 4', channelId : 1 },
    ]);
    


    //insert customers data
    await knex('customers').insert([
      { id : 1, name : 'Customer 1', email : 'customer1@test.com' },
      { id : 2, name : 'Customer 2', email : 'customer2@test.com' },
      { id : 3, name : 'Customer 3', email : 'customer3@test.com' },
    ]);
    //insert orders data
    await knex('orders').insert([
      { id : 1, customer_id : 1, status : 'pending' },
      { id : 2, customer_id : 2, status : 'pending' },
      { id : 3, customer_id : 3, status : 'pending' },
      { id : 4, customer_id : 2, status : 'pending' },
    ]);
};
