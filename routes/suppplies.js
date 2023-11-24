const express = require('express');
const router = express.Router();
const controller = require('../controllers/supplies');

router.get('/', async (req, res) => {
    
    res.json(await controller.getSupplies());
});

router.get('/ventasFiltradas', async(req, res) => {
    res.json(await controller.getAllSalesFiltradas());
});

module.exports = router;