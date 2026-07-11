import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import SearchBar from './SearchBar';
import Cart from './Cart';

function Navbar({ cartCount, onSearch, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">
            <span className="logo-icon">💻</span>
            <span className="logo-text">TechStore Chile</span>
          </div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="navbar-right">
          <button className="btn-auth">Iniciar Sesión</button>
          <button className="btn-auth btn-register">Registrarse</button>
          <Cart count={cartCount} onClick={onCartClick} />
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
