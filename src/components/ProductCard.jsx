function ProductCard({ producto, onAddToCart }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  const formatPrice = (precio) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(precio);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={producto.imagen} alt={producto.nombre} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{producto.nombre}</h3>
        <p className="product-price">{formatPrice(producto.precio)}</p>
        <div className="product-rating">{renderStars(producto.rating)}</div>
        <button
          className="btn-add-cart"
          onClick={() => onAddToCart(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
