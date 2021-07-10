import React from "react";
import { useHistory } from "react-router-dom";
import logoSushibar from "../images/logoSushibar.png";
import cocina from "../images/cocina.png";
import meserx from "../images/meserx.png";

const Home = () => {
  const history = useHistory();
  return (
    <div className="homeContainer">
      <img src={logoSushibar} alt="Sushibar" className="logoSushibar" />
        <input
        type="image"
        src={cocina}
        alt="Botón cocina"
        className="cocinaImg"
      />
      <input
        type="image"
        onClick={() => history.push("/Waiter")}
        src={meserx}
        alt="Botón mesero"
        className="meserxImg"
      />
    </div>
  );
};
export default Home;
