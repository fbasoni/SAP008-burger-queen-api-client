import '../Register/Register.css';
// import  '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReturnButton from '../../components/Forms/ReturnButton';
import Input from '../../components/Forms/Input'
import RadioButton from '../../components/Forms/RadioButton'
import SubmitButton from '../../components/Forms/SubmitButton';


function Register() {
    return (
      <section className="registerPage font-fam flex-container">
        <i className="return-icon">
          <ReturnButton />
        </i>
        <div id="cadastro">
          <h1 id="register-title">Register today!</h1>
          <form className="register-wrapper flex-container">
            <Input
              type="text"
              text="Name"
              name="name-input"
              id="name-input"
              placeholder="Enter your name..."
            />

            <Input
              type="email"
              text="E-mail"
              name="email-input"
              id="email-input-register"
              placeholder="Enter your e-mail..."
            />

            <Input
              type="password"
              text="Password"
              name="password-input"
              id="password-input-register"
              placeholder="Enter your password..."
            />
            <label id="radio-label">Select your role:</label>
            <div className="radio-btns">
              <RadioButton
                text="Cook"
                type="radio"
                name="employees"
                required="required"
                value="cook"
              />
              <RadioButton
                text="Waiter"
                type="radio"
                name="employees"
                required="required"
                value="waiter"
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