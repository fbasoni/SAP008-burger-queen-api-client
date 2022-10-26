import './App.css'
import logo from './Assets/Crown.gif'
import signUpButton from "Buttons";

function App() {
  return (
      <div className="App">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <section>
          <signUpButton />
          <loginButton />
        </section>
      </div>
  );
}

export default App;
