import "../Login/Login.css";
import Input from "../../components/Forms/Input";
import SubmitButton from "../../components/Forms/SubmitButton";
import ReturnButton from "../../components/Forms/ReturnButton";
import { createToken } from "../../data/api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = useNavigate();

  const getUserToken = (e) => {
    e.preventDefault();
    createToken(email, password)
    .then((responses) => {
      if (responses.status === 200) {
        responses.json()
          .then((data) =>
            localStorage.setItem("employee", JSON.stringify(data)));
        redirect('/initialPage')
      } else {
        console.log(responses.status);
      }
    })
    .catch((error) => console.log(error))
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
            required="required"
            placeholder="Enter your e-mail..." handleOnChange={(e) => setEmail(e.target.value)} 
          />

          <Input
            type="password"
            text="Password"
            name="password"
            id="password"
            required="required"
            placeholder="Enter your password..." handleOnChange={(e) => setPassword(e.target.value)}
          />

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