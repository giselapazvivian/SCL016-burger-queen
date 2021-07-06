import React from "react";
import MenuBar from "./MenuBar";

const Command = ({ command, setCommand }) => {
  
  return (
    <div className="command">
      <h3>Pedido</h3>
      {command.length === 0 ? (
        <p>nada agregado</p>
      ) : (
        command.map((menu) => (
          <MenuBar
            key={menu.id}
            menu={menu}
            command={command}
            setCommand={setCommand}
          />
        ))
      )}

    </div>
    
  );
};

export default Command;
