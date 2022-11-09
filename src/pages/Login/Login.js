import "../Login/Login.css";
import Input from "../../components/Forms/input/Input";
import SubmitButton from "../../components/Forms/button/SubmitButton";
import ReturnButton from "../../components/Forms/button/ReturnButton";
import {
  handleLoginError,
  validateEmail,
  validatePassword,
} from "../../data/validation.js";
import { createToken } from "../../data/api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const redirect = useNavigate();

  const getUserToken = (e) => {
    e.preventDefault();

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (emailValidation) {
      setErrorMessage(emailValidation);
    } 
    else if (passwordValidation) {
      setErrorMessage(passwordValidation);
    } 
    else {
      createToken(email, password)
      .then((response) => {
        if (response.status === 400) {
          const message = handleLoginError(response.status);
          setErrorMessage(message)

        } else if (response.status === 200) {
          //response.json()
          // .then((data) => {
              localStorage.setItem("token", response.token);
              localStorage.setItem("id", response.id);
              localStorage.setItem("email", response.email);
              localStorage.setItem("role", response.role);
              
            if (response.role === 'cook') {
              console.log('sou cozinheiro')
            } else if (response.role === 'waiter') {
              console.log('nao sou cozinheiro')
            }
          // })
          redirect('/Menu')
        }
      })
      .catch((error) => console.log(error))
    }
  }

  return (
    <section className="login-page font-fam flex-container">
      <i className="return-icon">
        <ReturnButton />
      </i>
      <section className="login-form flex-container">
        <h1 className="login-title">Welcome back!</h1>

        <form onSubmit={getUserToken} className="form-wrapper flex-container">
          <Input
            type="email"
            text="E-mail"
            name="email-input"
            id="email-input"
            placeholder="Enter your e-mail..." handleOnChange={(e) => setEmail(e.target.value)} 
          />

          <Input
            type="password"
            text="Password"
            name="password"
            id="password"
            placeholder="Enter your password..." handleOnChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && ( <p className="error-message">{errorMessage}</p> )}

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

export default Login;
