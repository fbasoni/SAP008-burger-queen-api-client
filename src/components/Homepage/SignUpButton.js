import styles from './SignUpButton.module.css';

function SignUpButton() {

  function loadRegisterPage() {
    window.location = '/register';
  }

  return (
  <div>
    <button onClick={loadRegisterPage} className={styles.signUpButton}>Sign up</button>
  </div>
  )
}

export default SignUpButton
