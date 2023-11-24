const supplies = require('../data/supplies');


async function getSupplies(){    
    return supplies.getAllSales();
}

async function getAllSalesFiltradas(){    
    return supplies.getAllSalesFiltradas();
}

module.exports = {getSupplies,getAllSalesFiltradas};
