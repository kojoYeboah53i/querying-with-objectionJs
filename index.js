const Customer = require('./models/customer');
const Order = require('./models/order');
const knex = require('./util/database');


async function main () {
        // delete all the customers
            // await Customer.query().delete();
        // delete all the orders
            await Order.query().delete();


    // create a new customer    
        const customer = await Customer.query().insert({
            name: 'Lil Wayne',
            email: 'wayne@mail.com'
        });

     
        // read all the customers
        // const customersRead = await Customer.query();
        // console.log(customersRead);

    //   add an order for this customer
       const order = await Customer.relatedQuery('order')
                        .for(customer.id)
                        .insert({total : 100})
        console.log("order total inserted... as  ", order);


     //read all orders from this customer
       const totalOrders = await Order.query()
                          .select('total')
                         .where('customer_id', customer.id)   
                        .for(customer.id)
                        .orderBy('created_at', 'desc');
        console.log("total orders", totalOrders);
     
    
 
    
    // //read all the orders
    // const ordersRead = await Order.query();
    // console.log(ordersRead);
    // }
    
    
    //create a new order
    // const order = await Order.query().insert({
    //     total: 100,
    //     customer_id: customer.id
    // });


}


main();