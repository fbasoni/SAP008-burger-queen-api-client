import '../Register/Register.css';
// import  '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReturnButton from '../../components/Forms/ReturnButton';


function Register() {
    return (
        <div className="registerPage">
          <i>
            <ReturnButton />
          </i>
            <div class="content">
             <div id="cadastro">
               <form> 
                 <h1>Register today!</h1>    
                 <p> 
                 <label>Name</label>
                 <input class="formAction" required="required" type="text" placeholder=" 👤 Enter your name..." />
                 </p>
          
                 <p> 
                 <label>Email</label>
                 <input class="formAction" required="required" type="email" placeholder=" ✉️ Enter your email..."/> 
                 </p>
          
                 <p> 
                 <label>Password</label>
                 <input class="formAction" required="required" type="password" placeholder=" 🔒 Enter your password..."/>
                 </p>

                 <p> 
                 <label>Select your working function:</label>
                 <br></br>
                 
                 <input type="radio" class="radioRegister" name="employees" required="required" value="cook"/>
                 <label>Cook</label>
                 <input type="radio" class="radioRegister" name="employees" required="required" value="waiter"/>
                 <label>Waiter</label>                
                 </p>  

                 <p> 
                 <input type="submit" id="btn-register" className="register-btn" value="Register"/> 
                 </p>
             </form>
           </div> 
          </div>
        </div>
    );
  }
  
  export default Register;