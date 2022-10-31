import styles from './Input.module.css'

function Input({ type, name, text, placeholder, handleOnChange }) {
  return (
    <div className={styles.form}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
export default Input