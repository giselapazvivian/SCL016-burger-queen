import React from 'react'
import obsButton from '../images/obsButton.png'

const MenuBar = ({menu}) => {
    
        return (
            <div classname = "sushiList">
               <ul >
                   {
                   menu.map((item,index) => (
                       <li key={index}>
                           <li>
                           <img src={item.images} alt= {item.name} className = "menuImg" />
                           </li>
                           <li className= "nameList">
                            {item.name}
                            </li>
                            <li>
                             {item.description}
                             </li>
                             <li>{item.price}</li> 
                             
                          <input
                             type="image"
                             src={obsButton}
                             alt="Botón observaciones"
                             className="obsButtonImg"
                            />
                       </li>
                   ))
                }
               </ul>
       
        </div>     
     )
  }
  export default MenuBar;
