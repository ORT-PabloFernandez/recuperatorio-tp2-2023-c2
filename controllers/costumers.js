const customers = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return customers.getAllCustomers(pageSize, page);
}

async function getCustomer(){
    return customers.getCustomer();
}
module.exports = {getAllCustomers, getCustomer}
