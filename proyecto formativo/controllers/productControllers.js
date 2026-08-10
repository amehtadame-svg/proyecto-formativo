let products = [
    { id: 1, nombre: "Laptop", categoria: "tecnologia", precio: 1200, stock: 15 }
];

// 2 params + 2 queries
const getFilteredProducts = (req, res) => {
    try {
        const { categoria, estado } = req.params; // 2 parámetros dinámicos
        const { minPrecio, maxStock } = req.query; // 2 parámetros de consulta

        if (!categoria || !estado) {
            return res.status(400).json({ success: false, message: "Faltan parámetros dinámicos" });
        }

        let filtered = products;

        if (minPrecio) filtered = filtered.filter(p => p.precio >= parseInt(minPrecio));
        if (maxStock) filtered = filtered.filter(p => p.stock <= parseInt(maxStock));

        res.status(200).json({
            success: true,
            params: { categoria, estado },
            queries: { minPrecio, maxStock },
            data: filtered
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));
    
    if (!product) return res.status(404).json({ success: false, message: "Producto no encontrado" });
    
    res.status(200).json({ success: true, data: product });
};

const createProduct = (req, res) => {
    if (!req.body.nombre || !req.body.precio) {
        return res.status(400).json({ success: false, message: "Nombre y precio son requeridos" });
    }
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json({ success: true, data: newProduct });
};

module.exports = { getFilteredProducts, getProductById, createProduct };