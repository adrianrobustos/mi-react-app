import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    backgroundColor: '#0d1117', // Fondo Navbar oscuro y elegante
    padding: '15px 30px',
    display: 'flex',
    gap: '35px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    borderBottom: '2px solid #007bff', // Línea de acento azul
    alignItems: 'center',
    position: 'sticky', // Se queda fijo arriba
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: '#a0c3ff', // Azul claro para los enlaces
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '600',
    padding: '5px 0',
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ color: '#007bff', margin: 0, fontSize: '24px' }}>⚽ FÚTBOL APP</h2>
      
      {/* 💡 CORRECCIÓN: Ahora dice "LIGAS" */}
      <Link to="/" style={linkStyle}>LIGAS</Link> 
      
      <Link to="/profile" style={linkStyle}>👤 Perfil</Link>
      <Link to="/contact" style={linkStyle}>📧 Contacto</Link>
      <Link to="/about" style={linkStyle}>ℹ️ About</Link>
    </nav>
  );
}