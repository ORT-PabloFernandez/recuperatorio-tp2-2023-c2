const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//1. Venta particulas por _id
router.get('/:id', async (req, res) => {
    res.json(await controller.getSale(req.params.id));
});

//2. Ventas filtradas por metodo de compra "purchaseMethod"
router.get('/bypurchasemethod/:purchasemethod', async (req, res) => {
    res.json(await controller.getSalesByPurchaseMethod(req.params.purchasemethod));
})

//3. Ventas de un cliente por email
router.get('/byemail/:email', async (req, res) => {
    try {
        const sales = await controller.getSalesCustomerByEmail(req.params.email)
        console.log(sales);
        res.json(sales);
    } catch(error){
        res.status(400).json(error);
    }
})

//4. Clientes por satisfaccion
router.get('/bysatisfaction/:num', async (req, res) => {
    res.json(await controller.getSalesCustomersSatisfaction(req.params.num));
})

router.get('/bylocation/:location', async (req, res) => {
    res.json(await controller.getSalesByLocation(req.params.location));
})

module.exports = router;