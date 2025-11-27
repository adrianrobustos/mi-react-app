import React from 'react';

function About() {
  const containerStyle = { backgroundColor: '#ffffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)', marginTop: '20px' };
  const contentStyle = { padding: '20px', maxWidth: '800px', margin: '0 auto' };

  return (
    <div style={contentStyle}>
      <h1 style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>Acerca de la App</h1>
      
      <div style={containerStyle}>
        <p style={{ fontSize: '1.1em', color: '#151414ff' }}>
          Esta es una **Single Page Application (SPA)** de temática deportiva, desarrollada como ejercicio final para demostrar el dominio de React, el enrutamiento y la gestión de datos asíncronos.
        </p>

        <h2 style={{ color: '#a0c3ff', borderBottom: '1px solid #444', paddingBottom: '5px' }}>Tecnologías Clave</h2>
        <ul style={{listStyleType: 'square', paddingLeft: '25px' }}>
          <li><strong>React:</strong> Para la construcción modular de la interfaz.</li>
          <li><strong>React Router DOM:</strong> Para las 5 vistas obligatorias y rutas dinámicas.</li>
          <li><strong>Axios:</strong> Para la conexión con la API externa (The Sports DB).</li>
          <li><strong>Manejo de Errores:</strong> Implementado para gestionar la inestabilidad de la API.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;