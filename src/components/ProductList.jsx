import ProductCard from './ProductCard';

function ProductList({ productos, onAddToCart }) {
  return (
    <section className="product-list">
      <h2 className="section-title">Productos Destacados</h2>
      <div className="products-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
