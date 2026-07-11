function CartSidebar({ isOpen, onClose, items, onUpdateQuantity, onRemove }) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  const formatPrice = (precio) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(precio);
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-sidebar">
        <div className="cart-sidebar-header">
          <h2 className="cart-sidebar-title">🛒 Mi Carrito</h2>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-sidebar-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🛒</span>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.nombre}</p>
                  <p className="cart-item-price">{formatPrice(item.precio)}</p>
                </div>
                <div className="cart-item-controls">
                  <button
                    className="cart-qty-btn remove"
                    onClick={() => {
                      if (item.cantidad === 1) {
                        onRemove(item.id);
                      } else {
                        onUpdateQuantity(item.id, item.cantidad - 1);
                      }
                    }}
                  >
                    {item.cantidad === 1 ? '✕' : '−'}
                  </button>
                  <span className="cart-item-qty">{item.cantidad}</span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => onUpdateQuantity(item.id, item.cantidad + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="cart-total-price">{formatPrice(total)}</span>
            </div>
            <button className="cart-checkout-btn">Finalizar Compra</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
