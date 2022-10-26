import './App.css'
import './components/HomepageButtons.css'

import logo from './Assets/Crown.gif'
import SignUpButton from './components/SignupButton';
import LoginButton from './components/LoginButton';


function App() {
  return (
      <div className="App">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <section className="homepage-btn">
          <SignUpButton />
          <LoginButton />
        </section>
      </div>
  );
}

export default App;
