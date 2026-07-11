import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import OffersSection from './components/OffersSection';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import productos from './data/productos.json';
import './css/styles.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productos);
  const [toast, setToast] = useState(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

  const handleSearch = (termino) => {
    if (termino === '') {
      setFilteredProducts(productos);
    } else {
      const filtered = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(termino.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (producto) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === producto.id);
      if (existing) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    setToast(`¡${producto.nombre} agregado al carrito!`);
    setTimeout(() => setToast(null), 2000);
  };

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: newQty } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleNavigate = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <div id="inicio">
        <Navbar
          cartCount={cartCount}
          onSearch={handleSearch}
          onCartClick={() => setIsCartOpen(true)}
        />
        <Header onNavigate={handleNavigate} />
        <Banner />
      </div>

      <div id="ofertas">
        <OffersSection productos={productos} onAddToCart={handleAddToCart} />
      </div>

      <div id="productos">
        <main className="main-content">
          <ProductList
            productos={filteredProducts}
            onAddToCart={handleAddToCart}
          />
          <Sidebar />
        </main>
      </div>

      <section className="info-bar">
        <div className="info-bar-container">
          <div className="info-item">
            <div className="info-icon">💳</div>
            <h4 className="info-title">Hasta 12 cuotas</h4>
            <p className="info-text">Sin interés con tarjetas participantes</p>
          </div>
          <div className="info-item">
            <div className="info-icon">🚚</div>
            <h4 className="info-title">Despachos</h4>
            <p className="info-text">A todo Chile en 24-48 horas</p>
          </div>
          <div className="info-item">
            <div className="info-icon">🔄</div>
            <h4 className="info-title">Cambios y devoluciones</h4>
            <p className="info-text">30 días para cambios</p>
          </div>
          <div className="info-item">
            <div className="info-icon">✅</div>
            <h4 className="info-title">Calidad garantizada</h4>
            <p className="info-text">Productos originales con garantía</p>
          </div>
        </div>
      </section>

      <div id="contacto">
        <Footer />
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
