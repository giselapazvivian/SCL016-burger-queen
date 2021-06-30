import React,{useContext} from 'react'
import nameContext from '../nameContext';
import sushiButton from '../images/sushiButton.png'
import coctelButton from '../images/coctelButton.png'
import MenuSushi from './MenuSushi';

const Orders = () => {
  const {name} = useContext(nameContext)
  // const buttonSushi = () => {
  //   console.log(buttonSushi);
  //   return <MenuSushi/>
  // }
  return (
    <div classname = "ordersMenu">
      <h3>Nombre: {name}</h3>
      <h3>Mesa: </h3>
      <div>
        <input
        type="image"
        src={sushiButton}
        alt="Botón sushi"
        className="sushiButtonImg"
        // onClick = {buttonSushi}
        />
        </div>
      <div>
       <input
        type="image"
        src={coctelButton}
        alt="Botón Coctelería"
        className="coctelButtonImg"
      />
      </div>
      <MenuSushi/>
      </div>
      )
 }
export default Orders;