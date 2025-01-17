import React, { useContext, useState } from "react";
import nameContext from "../nameContext";
import sushiButton from "../images/sushiButton.png";
import coctelButton from "../images/coctelButton.png";
import MenuBar from "./MenuBar";
import menu from "../menu.json";
import Command from "./Command";

const Orders = () => {
  const { name } = useContext(nameContext);
  const [show, setShow] = useState(menu.sushiList);
  const [command, setCommand] = useState([]);
 
  let total = 0;
  command.map((price) => (total = total + price.price*price.amount));

  return (
    <div className="ordersMenu">
      <h3>Nombre: {name}</h3>
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
      {show.map((menu) => (
        <MenuBar
          key={menu.id}
          menu={menu}
          command={command}
          setCommand={setCommand}
          show={show}
        />
      ))}

      <Command command={command} setCommand={setCommand} />
      <div className= "cuenta">${total}</div>
    </div>
  );
};
export default Orders;