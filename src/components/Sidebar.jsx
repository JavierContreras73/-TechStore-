function Sidebar() {
  const benefits = [
    { icon: '🚚', text: 'Envíos rápidos' },
    { icon: '🔒', text: 'Pago seguro' },
    { icon: '✅', text: 'Garantía' },
    { icon: '🎧', text: 'Soporte 24/7' }
  ];

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Beneficios</h3>
      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index} className="benefit-item">
            <span className="benefit-icon">{benefit.icon}</span>
            <span className="benefit-text">{benefit.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
