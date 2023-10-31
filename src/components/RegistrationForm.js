// RegistrationForm.js
import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validateInput';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!validateEmail(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!validatePassword(formData.password)) {
      validationErrors.password = 'Password must contain at least one uppercase letter and a special character';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form is valid, submit to server');
      // TODO: Add code to submit form data to the server
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <div className="error">{errors.email}</div>}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      {errors.password && <div className="error">{errors.password}</div>}
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
