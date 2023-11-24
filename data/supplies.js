const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const {ObjectId} = require('mongodb');


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

//1. Venta particulas por _id
async function getSale(id){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({_id: new ObjectId(id)});
    return sale;
}

//2. Ventas filtradas por metodo de compra "purchaseMethod" 
async function getSalesByPurchaseMethod(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                     .db(DATABASE)
                     .collection(SALES)
                     .find({purchaseMethod: purchaseMethod})
                     .toArray();
    return sales;
}

//3. Ventas de un cliente por email
async function getSalesCustomerByEmail(email){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb 
                     .db(DATABASE)
                     .collection(SALES)
                     .find({"customer.email": email}) //buscar customer.email = email
                     .toArray();
    return sales;
}

//4. Clientes por satisfaccion.
//Parámetro num permite elegir el número para filtrar
async function getSalesCustomersSatisfaction(num){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction": {$lt: parseInt(num)}})
                        .toArray();
    return customers;
}

//5. Total de venta por localizacion (storeLocation)
async function getTotalByLocation(location){
  //sin completar
}

async function getSalesByLocation(location){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb 
                     .db(DATABASE)
                     .collection(SALES)
                     .find({storeLocation: location})
                     .toArray();
    return sales;
}


module.exports = {getAllSales, getSale, getSalesByPurchaseMethod, getSalesCustomerByEmail, getSalesCustomersSatisfaction, getSalesByLocation};