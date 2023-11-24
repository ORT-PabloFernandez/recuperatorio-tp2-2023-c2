const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

//1. Venta particulas por _id
async function getSale(id){
    return sales.getSale(id);
}

//2. Ventas filtradas por metodo de compra "purchaseMethod"
async function getSalesByPurchaseMethod(purchaseMethod){
    return sales.getSalesByPurchaseMethod(purchaseMethod);
}

//3. Ventas de un cliente por email
async function getSalesCustomerByEmail(email){
    return sales.getSalesCustomerByEmail(email);
}

//4. Clientes por satisfaccion
async function getSalesCustomersSatisfaction(num){
    return sales.getSalesCustomersSatisfaction(num);
}

async function getSalesByLocation(location){
    return sales.getSalesByLocation(location);
}

module.exports = {getSales, getSale, getSalesByPurchaseMethod, getSalesCustomerByEmail, getSalesCustomersSatisfaction, getSalesByLocation};