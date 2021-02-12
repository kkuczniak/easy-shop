import React, { useState } from 'react';
import './Login.css';
import Logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={Logo} alt='' />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButton'>Sign In</button>
          <button className='login__registerButton'>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
