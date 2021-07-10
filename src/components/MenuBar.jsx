import React from "react";
//import obsButton from '../images/obsButton.png'

const MenuBar = ({ menu, command, setCommand, show }) => {
  const { name, images, description, price, id, amount } = menu;

  const addMenu = (id) => {
    let found = command.find((el) => el.id === id);
    console.log(found);
    if (found !== undefined) {
      found.amount++;
      const show = command.filter((menu) => menu.id !== parseInt(found.id));
      setCommand(show);
    }else{
      const menu = show.filter((menu) => menu.id === id);
      console.log("menu",menu);
      setCommand([...command, ...menu]);
    }
    
  };
  const removeMenu = (id) => {
    let deleteId = command.find(el => el.id === id)
    deleteId.amount --;
    if(deleteId.amount===0){
      const show = command.filter((menu) => menu.id !== id);
      setCommand(show);
    }else{
      const show = command.filter((menu) => menu.id !== parseInt(deleteId.id));
      setCommand(show);
    }
    
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
              className ="buttonAddRemove"
              type="button"
              onClick={() => addMenu(id)}
            >Agregar
            </button>
          </div>
        ) : (
          <div>
            <p>
              {name} {amount} ${price}
            </p>
            <button
              className ="buttonAddRemove"
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