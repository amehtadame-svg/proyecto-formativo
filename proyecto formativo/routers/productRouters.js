const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.getProductos);
router.post('/', productControllers.crearProducto);
router.put('/:id', productControllers.editarProducto);
router.delete('/:id', productControllers.eliminarProducto);

module.exports = router;