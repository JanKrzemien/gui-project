import { useState } from 'react';
import './LoginForm.css';

export const LoginForm = ({ onSubmit, onForgotPassword, onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="login-form">
      <div className="login-content">
        <h1 className="login-title">Logowanie</h1>
        
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <div className="input-label">
              <label htmlFor="username">Nazwa użytkownika</label>
            </div>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="input-line"></div>
          </div>

          <div className="input-group">
            <div className="input-label">
              <label htmlFor="password">Hasło</label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="input-line"></div>
          </div>

          <a href="#" className="forgot-password" onClick={onForgotPassword}>
            Zapomniałeś(-aś) hasła?
          </a>

          <button type="submit" className="login-button">
            Zaloguj się
          </button>

          <div className="register-link">
            <span>Nie jesteś członkiem? </span>
            <a href="#" onClick={onRegister}>Zarejestruj się</a>
          </div>
        </form>
      </div>
    </div>
  );
};