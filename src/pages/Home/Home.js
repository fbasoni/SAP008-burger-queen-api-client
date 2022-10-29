import '../Home/Home.css';
import '../../components/HomepageButtons.css';

import logo from '../../Assets/Crown.gif';
// import SignUpButton from '../components/SignupButton';
import LoginButton from '../../components/LoginButton';


function Home() {

    function goRegister() {
        window.open('/register')
      }

  return (
      <div className="Home">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <section className="homepage-btn">
        <button onClick={goRegister}>Sign Up</button>
          <LoginButton />
        </section>
      </div>
  );
}

export default Home;