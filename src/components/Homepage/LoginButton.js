import styles from './LoginButton.module.css'

function LoginButton() {
    function loadLoginPage() {
    window.location = '/login'
  }
  return (
    <button onClick={loadLoginPage} className={styles.loginButton}>Login</button>   
  );
}
export default LoginButton

//render da página ainda não funciona sem load, não tendo ainda essa funcionalidade de uma SPA; não funcionou colocando o button como link
//nem colocando o componente na homepage dentro de uma nav, nem criando ele dentro da nav como um link
//funciona tb usando tag ancora no lugar de button mas o efeito de load é igual ao win.location
