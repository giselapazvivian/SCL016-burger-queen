import logoSushibar from '../images/circle-sushibar.png'
import cocina from '../images/cocina.png'
import meserx from '../images/meserx.png'

const Home = () => {
  return (
  <div className="homeContainer" >
    <img src={logoSushibar} alt="Sushibar" className="logoSushibar"/>
    <input type="image" src={cocina} alt="Botón cocina" className="cocinaImg"/>
    <input type="image" src={meserx} alt="Botón mesero" className="meserxImg"/>
  </div>
  )
}
export default Home;