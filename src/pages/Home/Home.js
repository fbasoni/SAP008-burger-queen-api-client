import '../Home/Home.css';

import logo from '../../Assets/Crown.gif';
// import SignUpButton from '../components/SignupButton';
import SignUpButton from '../../components/SignUpButton';

import LoginButton from '../../components/LoginButton';


function Home() {

  return (
      <div className="Home">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <section className="homepage-btns">
          <SignUpButton />
          <LoginButton />
        </section>
      </div>
  );
}

export default Home;