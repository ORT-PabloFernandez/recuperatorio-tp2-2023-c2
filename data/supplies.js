const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const { purchaseMethod } = require('mongodb');


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

//Necesitamos un endpoint que nos permita listar las ventas filtradas
//por el metodo de compra (purchaseMethod), que pueden ser: Phone, Online, In store...

async function getAllSalesFiltradas(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod:purchaseMethod})
                        .toArray();    
    return supplies;
}

module.exports = {getAllSales, getAllSalesFiltradas};