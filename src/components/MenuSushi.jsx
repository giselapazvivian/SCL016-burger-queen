import React,{useState} from 'react'
import obsButton from '../images/obsButton.png'
import menu from './menu.json'


const MenuSushi = () => {
    
    const [sushi, setsushi] = useState(menu)  
    // const addSushi = () => {
    //     setsushi([...sushi])
    // }
    console.log(sushi.sushiList);
    return (
            <div classname = "sushiList">
               <ul >
                   {
                   sushi.sushiList.map((item,index) => (
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
  export default MenuSushi;
