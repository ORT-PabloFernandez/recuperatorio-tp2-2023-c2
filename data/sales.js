const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';

//Necesitamos un endpoint que nos devuelva una venta particular por _id
async function getSale(id){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id:new ObjectId(id)});    
    return sale;
}

module.exports = {getSale}