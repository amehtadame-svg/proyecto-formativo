const express = require('express');
const productRouter = require('./routers/productRouters');
const userRouter = require('./routers/userRouters');
const orderRouter = require('./routers/orderRouters');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
app.use('/api/productos', productRouter);
app.use('/api/usuarios', userRouter);
app.use('/api/pedidos', orderRouter);

// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: 'Error interno del servidor'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});