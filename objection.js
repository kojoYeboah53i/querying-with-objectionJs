const knex = require('./util/knexfile');
const Customer = require('./models/customer');
const Order = require('./models/order');


//create a new customer

async function main () {
    // delete all the customers
        // await Customer.query().delete();
    // delete all the orders
        // await Order.query().delete();

    // create a new customer    
        const customer = await Customer.query().insert({
            name: 'Isaac Yeboah',
            email: 'evans@gmail.com'
        });
    }

    main();


