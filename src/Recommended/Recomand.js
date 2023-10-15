import './Recomand.css'
import '../index.css'
import Buttons from "../components/Buttons"

function Recomand({handleClick}) {
  return <>
    <div>
      <h2 className='recommanded-title'>Recomanded</h2>
      <div className='recommanded-flex'>
        <Buttons onClickHandler={handleClick} value = "" title = "All Products" />
        <Buttons onClickHandler={handleClick} value = "Nike" title = "Nike" />
        <Buttons onClickHandler={handleClick} value = "Adidas" title = "Adidas" />
        <Buttons onClickHandler={handleClick} value = "Puma" title = "Puma" />
        <Buttons onClickHandler={handleClick} value = "Vans" title = "Vans" />
      </div>
    </div>
  </>
}
export default Recomand;
