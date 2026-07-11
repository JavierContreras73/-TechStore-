const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/techstore';

// Middleware
app.use(cors());
app.use(express.json());

// ─── Modelo Producto ────────────────────────────────────────────────
const productoSchema = new mongoose.Schema({
  nombre:      { type: String, required: true },
  precio:      { type: Number, required: true },
  imagen:      { type: String, required: true },
  rating:      { type: Number, required: true, min: 1, max: 5 },
  categoria:   { type: String, required: true },
  enOferta:    { type: Boolean, default: false }
}, { timestamps: true });

const Producto = mongoose.model('Producto', productoSchema);

// ─── Datos iniciales (extraídos de productos.json) ──────────────────
const productosIniciales = [
  { nombre: "Notebook Gamer",        precio: 1299990, imagen: "/laptop.jpg",     rating: 5, categoria: "notebooks",      enOferta: false },
  { nombre: "Mouse Gamer RGB",       precio: 29990,   imagen: "/mouse.jpg",      rating: 4, categoria: "perifericos",    enOferta: true  },
  { nombre: 'Monitor 27" 4K',        precio: 349990,  imagen: "/monitor.jpg",    rating: 5, categoria: "monitores",      enOferta: false },
  { nombre: "SSD 1TB NVMe",          precio: 89990,   imagen: "/disco.jpg",      rating: 4, categoria: "almacenamiento", enOferta: true  },
  { nombre: "Memoria RAM 16GB",      precio: 45990,   imagen: "/ram.png",        rating: 4, categoria: "componentes",    enOferta: false },
  { nombre: "Teclado Mecánico",      precio: 59990,   imagen: "/teclado.jpg",    rating: 5, categoria: "perifericos",    enOferta: true  },
  { nombre: "Audífonos Gaming",      precio: 49990,   imagen: "/auriculares.jpg",rating: 4, categoria: "audio",          enOferta: false },
  { nombre: "Cámara Web HD",         precio: 34990,   imagen: "/webcam.jpg",     rating: 3, categoria: "perifericos",    enOferta: false },
  { nombre: "Impresora Multifunción",precio: 129990,  imagen: "/impresora.png",  rating: 4, categoria: "impresoras",     enOferta: false },
  { nombre: 'Tablet 10"',            precio: 249990,  imagen: "/tablet.png",     rating: 5, categoria: "tablets",        enOferta: false },
  { nombre: "Procesador Ryzen 7",    precio: 289990,  imagen: "/ryzen.jpg",      rating: 5, categoria: "componentes",    enOferta: false },
  { nombre: "Tarjeta de Video RTX",  precio: 599990,  imagen: "/tarjeta.png",    rating: 5, categoria: "componentes",    enOferta: false }
];

// ─── Seed automático ────────────────────────────────────────────────
async function seedDatabase() {
  const count = await Producto.countDocuments();
  if (count === 0) {
    await Producto.insertMany(productosIniciales);
    console.log(`Base de datos vacía. ${productosIniciales.length} productos insertados automáticamente.`);
  } else {
    console.log(`La base de datos ya tiene ${count} productos. Seed omitido.`);
  }
}

// ─── Rutas API ──────────────────────────────────────────────────────

// GET /api/productos → todos los productos
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
});

// GET /api/productos/:id → un producto por ID
app.get('/api/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto', error: error.message });
  }
});

// GET /api/productos/ofertas → solo productos en oferta
app.get('/api/productos/ofertas', async (req, res) => {
  try {
    const ofertas = await Producto.find({ enOferta: true });
    res.json(ofertas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener ofertas', error: error.message });
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de TechStore Chile funcionando correctamente' });
});

// ─── Conexión a MongoDB y arranque ──────────────────────────────────
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB exitosamente');
    await seedDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1);
  });
