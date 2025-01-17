import { useNavigate } from 'react-router';
import { useLocalStorage } from '@uidotdev/usehooks';
import { StandardInput } from './Inputs';
import { ContainedButton } from './Buttons';
import { useState } from 'react';

import './LoginForm';

export const RegistrationForm = ({ onSubmit }) => {
  const navigate = useNavigate()
  
  const [userData, setUserData] = useLocalStorage('userData', undefined)

  const [formData, setFormData] = useState({
    email: '',
    email_repeat: '',
    password: '',
    username: ''
  });
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const checkInput = () => {
    //TODO finish
  }

  const handleSubmit = async (e) => {
    checkInput()

    e.preventDefault();
    const url = "http://localhost:3000/auth/signup"
    const data = {
      auth: {
        email: formData.email,
        password: formData.password,
        role: 'user',
        isActive: true
      },
      info: {
        username: formData.username
      }
    }
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      if(res.ok)
        navigate('/login')
    })
  };

  return !userData ? (
    <div className="login-form">
      <div className="login-content">
        <h1 className="login-title">Rejestracja</h1>
        <div className="input-group">
          <StandardInput  
            name='username'
            label='Nazwa użytkownika'
            type='text'

            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <StandardInput 
            name='password'
            label='Hasło'
            type='password'
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <StandardInput  
            name='email'
            label='Email'
            type='text'

            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <StandardInput 
            name='email_repeat'
            label='Powtórz email'
            type='text'
            onChange={handleChange}
          />
        </div>

        <ContainedButton text="Zarejestruj się" onClick={handleSubmit} className="login-button"/>

        <div className="register-link">
          <span>Masz już konto? </span>
          <a onClick={() => navigate('/login')}>Zaloguj się</a>
        </div>
      </div>
    </div>
  ) : (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Wyloguj się aby zarejestrować się ponownie</h1>
    </main>
  )
};
