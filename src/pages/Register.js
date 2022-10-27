import '../pages/Register.css';

function Register() {
    return (
        <div className="registerPage">
            <h1>Register Today!</h1>
            <form>
                <p>Name</p>
                <input type="text" class="formRegister" placeholder="Enter your name..."/>
                <p>Email</p>
                <input type="text" class="formRegister" placeholder="Enter your email..."/>
                <p>Password</p>
                <input type="text" class="formRegister" placeholder="Enter your password..."/>
                <p>What do you work as?</p>
                <input type="radio" class="radioRegister" name="employees" value="cook"/>
                <label>Cook</label>
                <input type="radio" class="radioRegister" name="employees" value="waiter"/>
                <label>Waiter</label>
                <br></br>
                <button class="btn-register">Register</button>
            </form>
        </div>
    );
  }
  
  export default Register;