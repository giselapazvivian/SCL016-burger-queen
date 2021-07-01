import React, { useContext, useState } from "react";
import nameContext from "../nameContext";
import sushiButton from "../images/sushiButton.png";
import coctelButton from "../images/coctelButton.png";
import MenuSushi from "./MenuSushi";
import MenuCoctel from "./MenuCoctel";

const Orders = () => {
  const { name } = useContext(nameContext);
  const [show, setShow] = useState(true);
  // const buttonSushi = () => {
  //   console.log(buttonSushi);
  //   return <MenuSushi/>
  // }
  return (
    <div classname="ordersMenu">
      <h3>Nombre: {name}</h3> 
      <h3>Mesa: </h3>
      <div>
        <input
          type="image"
          src={sushiButton}
          alt="Botón sushi"
          className="sushiButtonImg"
          // onClick = {buttonSushi}
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      <div>
        <input
          type="image"
          src={coctelButton}
          alt="Botón Coctelería"
          className="coctelButtonImg"
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      {show ? (
        <div><MenuSushi /></div>
      ) : (
        <div style={{ color: 'blue' }}><MenuCoctel /></div>
      )}
      
    </div>
  );
};
export default Orders;
