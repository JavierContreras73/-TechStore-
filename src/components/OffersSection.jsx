import ProductCard from './ProductCard';

function OffersSection({ productos, onAddToCart }) {
  const ofertas = productos.filter((p) => p.enOferta);

  if (ofertas.length === 0) return null;

  return (
    <section id="ofertas" className="offers-section">
      <div className="offers-header">
        <h2 className="section-title">Ofertas Imperdibles</h2>
        <span className="offers-badge">🔥 -15% OFF</span>
      </div>
      <div className="offers-grid">
        {ofertas.map((producto) => (
          <div key={producto.id} className="offer-card-wrapper">
            <span className="offer-tag">Oferta</span>
            <ProductCard producto={producto} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OffersSection;
