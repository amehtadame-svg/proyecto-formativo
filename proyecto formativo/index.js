const express = require('express');
const productRouters = require('./routers/productRouters');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar peticiones con cuerpo en formato JSON
app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: "API del Proyecto Formativo corriendo correctamente" });
});

// Enlace de las rutas de productos (apunta a la carpeta /routers)
app.use('/api/productos', productRouters);

// Encender el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});