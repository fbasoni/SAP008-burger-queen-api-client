import styles from './RadioButton.module.css';

function RadioButton({text, type, name, required, value, handleOnChange}){
  return (
    <div className={styles.radioForm}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default RadioButton