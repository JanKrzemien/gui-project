import './RegistrationForm.css';

export const RegistrationForm = ({ onSubmit }) => {
  return (
    <div className="registration-container">
      <h1 className="registration-title">Rejestracja</h1>
      
      <div className="form-container">
        <div className="input-group">
          <label>Nazwa użytkownika</label>
          <input type="text" />
        </div>

        <div className="input-group">
          <label>Hasło</label>
          <input type="password" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="input-group">
          <label>Powtórz Email</label>
          <input type="email" />
        </div>

        <button className="register-button" onClick={onSubmit}>
          Zarejestruj się
        </button>

        <p className="login-link">
          Masz już konto? <span>Zaloguj się</span>
        </p>
      </div>
    </div>
  );
};
