import React, { useState } from 'react';
import '../index.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { fullName, email } = formData;
    const newErrors = {};

    if (fullName.length <= 5) {
      newErrors.fullName = 'El nombre completo debe tener más de 5 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'El email no tiene un formato válido.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Datos enviados:', formData);
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail.`);
      setFormData({ fullName: '', email: '' });
      setErrors({});
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label>Nombre Completo:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <button className='form-button' type="submit">Enviar</button>
      {Object.keys(errors).length > 0 && (
        <p className="error">Por favor verifique su información nuevamente</p>
      )}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default Form;

