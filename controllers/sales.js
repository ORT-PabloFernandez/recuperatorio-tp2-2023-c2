const sales = require('../data/supplies');


async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){
    return sales.getSale(id);
}

module.exports = {getSales, getSale};

