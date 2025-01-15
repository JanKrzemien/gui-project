import { useState } from 'react';
import { useNavigate } from 'react-router'
import { ContainedButton } from './Buttons';
import { StandardInput } from './Inputs'
import { useLocalStorage } from '@uidotdev/usehooks'
import './LoginForm.css';

export const LoginForm = () => {
  const navigate = useNavigate()
  
  const [userData, setUserData] = useLocalStorage('userData', undefined)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    const url = "http://localhost:3000/auth/login"
    const data = {
      email: formData.email,
      password: formData.password,
    }
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      if(res.ok)
        return res.json()
      else {
        // wrong input
        setError(true)
      }
  })
      .then(data => {
        setUserData({
          user: data.user,
          token: data.access_token
        })
        navigate('/')
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return !userData ? (
    <div className="login-form">
      <div className="login-content">
        <h1 className="login-title">Logowanie</h1>
        <div className="input-group">
          <StandardInput  
            name='email'
            label='Email'
            type='text'

            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="input-group">
          <StandardInput 
            name='password'
            label='Hasło'
            type='password'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <a className="forgot-password" onClick={() => navigate('/register')}>
          Zapomniałeś(-aś) hasła?
        </a>


        <ContainedButton text="Zaloguj się" onClick={handleSubmit} className="login-button"/>

        <div className="register-link">
          <span>Nie jesteś członkiem? </span>
          <a onClick={() => navigate('/register')}>Zarejestruj się</a>
        </div>
      </div>
    </div>
  ) : (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Wyloguj się aby zalogować się ponownie</h1>
    </main>
  );
};