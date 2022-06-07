const { Model } = require('objection');
const Order = require('./order');


class Customer extends Model {
    static get tableName() {
        return 'customers';
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
    
    static nameColumn() {
        return 'name';

    }

    static get emailColumn() {
        return 'email';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                email: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' }
            }
        };
    }




    static get relationMappings() {
        return {
            order: { //remember to rename order to orders
                relation: Model.HasOneRelation,
                modelClass: Order,
                join: {
                    from: 'customers.id',
                    to: 'orders.customer_id'
                }
            }
        };
    }

}


module.exports = Customer;