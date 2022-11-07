import returnButton from '../../../Assets/icons/arrow-left.svg';

function ReturnButton() {
  function returnToPreviousPage(){
    window.history.back();
  }
  return (
    <img src={returnButton} alt="return arrow" onClick={returnToPreviousPage}></img>
  )
}

export default ReturnButton