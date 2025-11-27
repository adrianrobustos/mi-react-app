import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Datos enviados:', formData);
      setSubmitted(true);
    } else {
      alert('Por favor, rellena todos los campos.');
    }
  };
  
  // Estilos modernos para inputs y botón
  const inputStyle = { padding: '12px', border: '1px solid #444', borderRadius: '6px', backgroundColor: '#333', color: 'white' };
  const buttonStyle = { padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s' };
  const formContainerStyle = { backgroundColor: '#2d2d2d', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)' };
  const contentStyle = { padding: '20px', maxWidth: '600px', margin: '0 auto' };

  return (
    <div style={contentStyle}>
      <h1 style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>Contáctanos</h1>
      
      {submitted ? (
        <div style={{ padding: '25px', backgroundColor: '#384d38', border: '1px solid #4caf50', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ color: '#4caf50' }}>¡Mensaje Enviado!</h2>
          <p>Gracias, **{formData.name}**. Tu mensaje ha sido recibido con éxito.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', ...formContainerStyle }}>
          
          <label htmlFor="name" style={{ color: '#ccc' }}>Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle}/>

          <label htmlFor="email" style={{ color: '#ccc' }}>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle}/>

          <label htmlFor="message" style={{ color: '#ccc' }}>Mensaje:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" style={inputStyle}/>

          <button type="submit" style={buttonStyle}>
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;