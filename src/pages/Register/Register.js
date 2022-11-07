import '../Register/Register.css';
import ReturnButton from '../../components/Forms/ReturnButton';
import Input from '../../components/Forms/Input'
import RadioButton from '../../components/Forms/RadioButton'
import SubmitButton from '../../components/Forms/SubmitButton';
import { createUser } from '../../data/api.js';
import { useState }from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const redirect = useNavigate();
  
  const createUserOnSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, role)
    createUser(name, email, password, role)
      .then((res) => {
        if (res.status === 200) {
          redirect('/initialPage');
          const response = res.json();
          console.log(response);
          return response;
        }
      })
      .catch((error) => console.log(error));
  }
  
  return (
    <section className="registerPage font-fam flex-container">
      <i className="return-icon">
        <ReturnButton />
      </i>
      <div id="cadastro">
        <h1 id="register-title">Register today!</h1>
        <form
          onSubmit={createUserOnSubmit}
          className="register-wrapper flex-container"
        >
          <Input
            type="text"
            text="Name"
            name="name-input"
            id="name-input"
            required={true}
            placeholder="Enter your name..."
            handleOnChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            text="E-mail"
            name="email-input"
            id="email-input-register"
            required="required"
            placeholder="Enter your e-mail..."
            handleOnChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            text="Password"
            name="password-input"
            id="password-input-register"
            required="required"
            placeholder="Enter your password..."
            handleOnChange={(e) => setPassword(e.target.value)}
          />
          <label id="radio-label">Select your role:</label>
          <div className="radio-btns">
            <RadioButton
              text="Cook"
              type="radio"
              name="employees"
              required="required"
              value="cook"
              handleOnChange={(e) => setRole(e.target.value)}
            />
            <RadioButton
              text="Waiter"
              type="radio"
              name="employees"
              required="required"
              value="waiter"
              handleOnChange={(e) => setRole(e.target.value)}
            />
          </div>
          <SubmitButton type="submit" id="register-btn" value="Register" />
          <p className="no-account">
            Already have an account?{" "}
            <a href="/login" className="no-account">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
  }
  
  export default Register;


  
  // const setUserData = (e) => {
  //   e.preventDefault();
  //   createUser(name, email, password, role)
  //   .then((responses) => {
  //     if (responses.status === 200) {
  //       window.location = '/pageInicial';
  //       const res = responses.json();
  //       console.log(res.token);
  //     }
  //   })
  //   .catch((err) => console.log(err));
  // }