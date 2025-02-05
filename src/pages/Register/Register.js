import '../Register/Register.css';
import ReturnButton from '../../components/Forms/button/ReturnButton';
import Input from '../../components/Forms/input/Input'
import RadioButton from '../../components/Forms/radio/RadioButton'
import SubmitButton from '../../components/Forms/button/SubmitButton';
import {
  handleRegisterErrors,
  validateEmail,
  validateName,
  validatePassword,
  validateRole,
} from "../../data/validation.js";
import { createUser } from '../../data/api.js';
import { useState }from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const redirect = useNavigate();
  

  const createUserOnSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, role)

    const emailValidation = validateEmail(email);
    const nameValidation = validateName(name);
    const passwordValidation = validatePassword(password);
    const roleValidation = validateRole(role);

    if (nameValidation) {
      setErrorMessage(nameValidation);
    } else if (emailValidation){
      setErrorMessage(emailValidation);
    } else if(passwordValidation){
      setErrorMessage(passwordValidation);
    } else if (roleValidation) {
      setErrorMessage(roleValidation);
    } else {
      createUser(name, email, password, role)
        .then((response) => {
          if (response.status >= 400) {
            const message = handleRegisterErrors(response.status);
            setErrorMessage(message);
          } else if (response.status === 200) {
            redirect('/login');
          }
        })
        .catch((error) => console.log(error));
    }
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
            placeholder="Enter your name..."
            handleOnChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            text="E-mail"
            name="email-input"
            id="email-input-register"
            placeholder="Enter your e-mail..."
            handleOnChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            text="Password"
            name="password-input"
            id="password-input-register"
            placeholder="Enter your password..."
            handleOnChange={(e) => setPassword(e.target.value)}
          />
          <label id="radio-label">Select your role:</label>
          <div className="radio-btns">
            <RadioButton
              text="Cook"
              type="radio"
              name="employees"
              value="cook"
              handleOnChange={(e) => setRole(e.target.value)}
            />
            <RadioButton
              text="Waiter"
              type="radio"
              name="employees"
              value="waiter"
              handleOnChange={(e) => setRole(e.target.value)}
            />
          </div>

          {errorMessage && ( <p className="error-message">{errorMessage}</p> )}

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

