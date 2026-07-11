function Header({ onNavigate }) {
  const menuItems = [
    { label: 'Inicio', target: 'inicio' },
    { label: 'Productos', target: 'productos' },
    { label: 'Ofertas', target: 'ofertas' },
    { label: 'Nosotros', target: null },
    { label: 'Contacto', target: 'contacto' }
  ];

  return (
    <header className="header">
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.target ? `#${item.target}` : '#'}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                if (item.target) {
                  onNavigate(item.target);
                }
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
