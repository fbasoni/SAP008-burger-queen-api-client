import '../Login/Login.css';
import ReturnButton from '../../components/Forms/ReturnButton';

import { useState } from 'react'

function Login(){
  function userLogin(e) {
    e.preventDefault();
    console.log('Usuário logado');
    console.log(`auth info: ${email} e ${password}`)
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <section className="login-page font-fam flex-container">
      <i className="return-icon">
        <ReturnButton />
      </i>
      <section className="login-form flex-container">
        <h1 className="login-title">Welcome back!</h1>
        <form onSubmit={userLogin} className="form-wrapper flex-container">
          <div className="input-wrapper flex-container">
            <label className="input-label">E-mail</label>
            <input
              className="login-input"
              type="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-wrapper flex-container">
            <label className="input-label">Password</label>
            <input
              className="login-input"
              type="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <a href="/reset" className="forgot-password">
            Forgot password
          </a>
          <input type="submit" className="login-btn" value="Login"></input>
          <p className="no-account">Don't have an account? <a href="/register" className="no-account">Sign up.</a></p>
        </form>
      </section>
    </section>
  );
}

export default Login