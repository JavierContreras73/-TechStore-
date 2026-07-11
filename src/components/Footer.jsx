function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">TechStore Chile</h4>
          <ul className="footer-links">
            <li>📍 Av. Providencia 1234, Santiago</li>
            <li>📧 contacto@techstore.cl</li>
            <li>📞 +56 9 1234 5678</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Redes Sociales</h4>
          <div className="footer-social">
            <a href="#">📘 Facebook</a>
            <a href="#">🐦 Twitter</a>
            <a href="#">📷 Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <p className="copyright">© 2026 TechStore Chile. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
