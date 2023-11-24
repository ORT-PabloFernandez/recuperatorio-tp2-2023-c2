const conn = require('./conn');
const DATABASE = 'sample_supplies';
const CUSTOMER = 'customer';


async function getAllCustomers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMER)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();
    return customers;
}

async function getCustomer(email){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                    .db(DATABASE)
                    .collection(CUSTOMER)
                    .findOne({email:email});
    return customer;
}

module.exports = {getAllCustomers, getCustomer}

