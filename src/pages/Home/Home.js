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
      <nav>
        <ul className="homepage-btns">
          <li>
            <SignUpButton />
          </li>
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;