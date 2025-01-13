import { LoginForm } from '../shared-components/LoginForm';
import './LoginContentPage.css';

export const LoginContentPage = () => {
  return (
    <div className="login-page">
      <div className="login-form-wrapper">
        <LoginForm />
      </div>
    </div>
  );
};
