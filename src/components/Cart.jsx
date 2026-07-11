function Cart({ count, onClick }) {
  return (
    <button className="cart-btn" onClick={onClick}>
      🛒 Carrito ({count})
    </button>
  );
}

export default Cart;
