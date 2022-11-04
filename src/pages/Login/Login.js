import '../Login/Login.css';
import Input from '../../components/Forms/Input'
import SubmitButton from '../../components/Forms/SubmitButton';
import ReturnButton from '../../components/Forms/ReturnButton';
// import { useState } from 'react'
// import { ReactSession } from 'react-client-session';

// ReactSession.setStoreType("localStorage");
// ReactSession.set("username", "Bob");
// // ReactSession.get("username");  // Returns "Bob"


const createToken = (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  const url = fetch("https://lab-api-bq.onrender.com/auth", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: data.get("email-input"),
      password: data.get("password"),
    }),
  }).then((responses) => {
    if (responses.status === 200) {
  // console.log(Responses.json().then(data => console.log(data.token)))
    responses.json().then(data => window.localStorage.setItem("employee", JSON.stringify(data)))
 // window.localStorage.setItem("name", "José")
    return window.location = '/pageInicial'
   } else {
    return console.log(responses.status)
   }
  }).catch((err) => {
    console.log(err);
  });
  console.log(url)
};

function Login(){

  // function page1() {
  //   window.location = '/pageInicial';
  // }
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // function handleChange(e) {
  //   setEmail(e.target.value)
  //   setPassword(e.target.value)
  // }

  // // function handleSubmit(e){
  // //   e.preventDefault()
  // //   console.log('Usuário logado');
  // //   console.log(`auth info: ${email} e ${password}`)
  // // }


  return (
    <section className="login-page font-fam flex-container">
      <i className="return-icon">
        <ReturnButton />
      </i>
      <section className="login-form flex-container">
        <h1 className="login-title">Welcome back!</h1>

        <form onSubmit={createToken} className="form-wrapper flex-container">
          <Input type="email" text="E-mail" name="email-input" id="email-input" required="required" placeholder="Enter your e-mail..."  /* onChange={handleChange}*/ />

          <Input type="password" text="Password" name="password" id="password" required="required" placeholder="Enter your password..." /* onChange={handleChange}*/ />

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