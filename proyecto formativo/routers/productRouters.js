const express = require('express');
const router = express.Router();
const { getFilteredProducts, getProductById, createProduct } = require('../controllers/productController');

// Ruta con 2 parámetros dinámicos + 2 query params
router.get('/:categoria/:estado', getFilteredProducts);

// Otras rutas
router.get('/:id', getProductById);
router.post('/', createProduct);

module.exports = router;