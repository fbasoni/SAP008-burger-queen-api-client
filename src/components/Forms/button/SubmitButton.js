import styles from './SubmitButton.module.css'

function SubmitButton({ type, id, value }){
  
  return (
    <input type={type} id={id} className={styles.submitBtn} value={value} ></input>
  )
}

export default SubmitButton