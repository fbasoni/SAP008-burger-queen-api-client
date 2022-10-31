import '../Login/Login.css';
import { FaRegUser } from "react-icons/fa";

import Input from '../../components/Forms/Input'

import SubmitButton from '../../components/Forms/SubmitButton';

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
          <Input
            type="email"
            text="E-mail"
            name="email-input"
            id="email-input"
            placeholder="Enter your e-mail..."
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            text="Password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="/reset" className="forgot-password">
            Forgot password
          </a>
          
          <SubmitButton type="submit" id="login-btn" value="Login" />
      
          <p className="no-account">
            Don't have an account?{" "}
            <a href="/register" className="no-account">
              Sign up
            </a>
          </p>
        </form>

      </section>
    </section>
  );
}

export default Login