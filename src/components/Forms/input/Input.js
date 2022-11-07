import styles from './Input.module.css'

function Input({ type, name, required, text, placeholder, handleOnChange }) {
  return (
    <div className={styles.form}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
export default Input