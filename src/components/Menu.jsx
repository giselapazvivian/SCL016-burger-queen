import React,{useContext} from 'react'
import nameContext from '../nameContext';

const Menu= ()=> {
  const {name} = useContext(nameContext)
  return (
    <div>
      <h1>Nombre {name}</h1>
      <h1>Mes</h1>
    </div>
  )
}
export default Menu;