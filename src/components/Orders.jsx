import React, { useContext, useState } from "react";
import nameContext from "../nameContext";
import sushiButton from "../images/sushiButton.png";
import coctelButton from "../images/coctelButton.png";
import MenuBar from "./MenuBar";
import menu from "../menu.json";

const Orders = () => {
  const { name } = useContext(nameContext);
  const [show, setShow] = useState(menu.sushiList);

  // const buttonSushi = () => {
  //   console.log(buttonSushi);
  //   return <MenuSushi/>
  // }
  return (
    <div classname="ordersMenu">
      <h3>Nombre: { name }</h3>
      <h3>Mesa:  </h3>
      <div>
        <input
          type="image"
          src={sushiButton}
          alt="Botón sushi"
          className="sushiButtonImg"
          // onClick = {buttonSushi}
          onClick={() => {
            setShow(menu.sushiList);
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
            setShow(menu.coctelList);
          }}
        />
      </div>
      <MenuBar menu={show} />   
    </div>
  );
};
export default Orders;
