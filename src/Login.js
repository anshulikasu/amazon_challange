import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import "./Login.css";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault()
  }
  const register = e =>{
    e.preventDefault();
  
    //do some fancy firebase stuff.....
  }
  return (
  <div className ="login">
      <Link to="/">
      <img 
      className="login__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
      
      />
      </Link>
      <div className=" login__container">
      <h1> sign-in</h1>
      

      <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password"/>
          <button type='submit' onClick={signIn} className="login__signinbutton" value={password} onChange={e => setPassword(e.target.value)}>Sign in</button>
        </form>
        <button onClick={register} className="login__create1" >Create Your Amazon Acount</button>
    </div>
  </div>
  );
}

export default Login;
