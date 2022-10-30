import '../Home/Home.css';

import logo from '../../Assets/Crown.gif';

import SignUpButton from '../../components/Homepage/SignUpButton';

import LoginButton from '../../components/Homepage/LoginButton';


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