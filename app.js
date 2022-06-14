//connects to an sqlite database




const db = new sqlite3.Database('./util/sql.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the sqlite database.');
});



db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, total INTEGER, customer_id INTEGER)');
}  // end serialize
); // end db.serialize

//create a new customer
const createCustomer = (name, email) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO customers (name, email) VALUES ('${name}', '${email}')`, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({
                    name: this.lastID,
                    email: this.lastID
                });
            }
        });
    });
}


//read all the customers
const readCustomers = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM customers', function (err, customers) {
            if (err) {
                reject(err);
            } else {
                resolve(customers);
            }
        });
    });
}  // end readCustomers 


//create order for a customer
const createOrder = (total, customer_id) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO orders (total, customer_id) VALUES (${total}, ${customer_id})`, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({
                    total: this.lastID,
                    customer_id: this.lastID
                });
            }
        });
    });
}


//read all orders from a customer
const readOrders = (customer_id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM orders WHERE customer_id = ${customer_id}`, function (err, orders) {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
}  // end readOrders            


//read all orders
const readAllOrders = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM orders', function (err, orders) {
            if (err) {
                reject(err);
            } else {
                resolve(orders);
            }
        });
    });
}  // end readAllOrders 


//delete all customers
const deleteCustomers = () => {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM customers', function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
}  // end deleteCustomers

//close db connection   

async function main () {
  //create customer
    const customer = await createCustomer('Evans Yeboah', 'evans@mail.com');
    console.log(customer);


    
}

main();


db.close();



