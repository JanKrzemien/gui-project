import { LoginForm } from '../shared-components/LoginForm';
import './LoginContentPage.css';

export const LoginContentPage = () => {
  return (
    <div className="login-page">
      <div className="login-form-wrapper">
        <LoginForm 
          onSubmit={(data) => console.log('Form submitted:', data)}
          onForgotPassword={() => console.log('Forgot Password clicked')}
          onRegister={() => console.log('Register link clicked')}
        />
      </div>
    </div>
  );
};
