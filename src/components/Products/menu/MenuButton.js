import styles from './menuButton.module.css'

function MenuButton({type, id, value, onClick}) {

  return (
    <button type={type} id={id} className={styles.menuButton} onClick={onClick} >{value}</button>
  )
}
export default MenuButton

