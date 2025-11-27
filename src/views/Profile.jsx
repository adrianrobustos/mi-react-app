import React from 'react';

function Profile() {
  // 1. Datos del usuario (ESTÁTICOS)
  const profileInfo = {
    name: 'Adrián Rodríguez (Admin)',
    role: 'Desarrollador Principal',
    status: 'Activo desde 2025',
    bio: 'Encargado de la arquitectura de la Single Page Application (SPA) y la integración de datos.',
    memberSince: 'Octubre 2025',
  };

  // 2. Estilos para la vista (ajustados a un tema oscuro si estás usando estilos globales oscuros)
  const cardStyle = {
    backgroundColor: '#ffffffff', // Fondo oscuro para la tarjeta
    color: '#000000ff',           // Texto claro
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(24, 24, 24, 0.4)',
    marginTop: '20px',
  };
  
  const contentStyle = {
    padding: '20px', 
    maxWidth: '600px', 
    margin: '0 auto',
  };

  return (
    <div style={contentStyle}>
      <h1 style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
        👤 Perfil de Usuario
      </h1>
      
      <div style={cardStyle}>
        <p style={{ fontSize: '1.4em', marginBottom: '15px' }}>
          <strong>Nombre:</strong> {profileInfo.name}
        </p>
        
        <p><strong>Rol:</strong> {profileInfo.role}</p>
        <p><strong>Estado:</strong> <span style={{ color: '#4caf50' }}>{profileInfo.status}</span></p>
        <p><strong>Miembro Desde:</strong> {profileInfo.memberSince}</p>
        
        <p style={{ marginTop: '25px', borderTop: '1px solid #444', paddingTop: '15px', fontSize: '1em' }}>
          <strong>Biografía:</strong> {profileInfo.bio}
        </p>
      </div>
    </div>
  );
}

export default Profile;