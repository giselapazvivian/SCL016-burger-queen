import React from "react";
//import obsButton from '../images/obsButton.png'

const MenuBar = ({ menu, command, setCommand, show }) => {
  const { name, images, description, price, id } = menu;
  
  

  const addMenu = (id) => {
    const menu = show.filter((menu) => menu.id === id);
    setCommand([...command, ...menu]);
  };
  const removeMenu = (id) => {
    const show = command.filter((menu) => menu.id !== id);
    setCommand(show);
  };
 

  return (
    <div>
      <ul>
        {show ? (
          <div>
            <img src={images} alt={name} className="menuImg" />
            <li>{name}</li>
            <li>{description}</li>
            <li>${price}</li>
            <button
              className="button"
              type="button"
              onClick={() => addMenu(id)}
            >
              Agregar
            </button>
          </div>
        ) : (
          <div>
            <p>
              {name} ${price}
            </p>
            <button
              className="button"
              type="button"
              onClick={() => removeMenu(id)}
            >
              Eliminar
            </button>

          </div>
         
        )}
        
      </ul>
    </div>
  );
};
export default MenuBar;
