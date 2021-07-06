import React, {useContext}from "react";
import check from "../images/check.png";
import arrow from "../images/arrow.png";
import { useHistory } from 'react-router-dom';
import nameContext from "../nameContext";

const Waiter = () => {
  const history = useHistory();
  const {name , updateName } = useContext(nameContext)
  return (
    <div className="waiterContainer">
      <div className="table1">
        <h2>MESA 1</h2>
        <input type="text" value={name}s onChange={(e)=> {updateName(e.target.value)}}></input>
        <input 
        type="image" 
        onClick={() => history.push("/Orders")}
        src={check} 
        alt="check">
        </input>
      </div>
      <div className="table2">
        <h2>MESA 2</h2>
        <input type="text"></input>
        <input type="image" src={check} alt="check"></input>
      </div>
      <div className="table3">
        <h2>MESA 3</h2>
        <input type="text"></input>
        <input type="image" src={check} alt="check"></input>
      </div>
      <div className="table4">
        <h2>MESA 4</h2>
        <input type="text"></input>
        <input type="image" src={check} alt="check"></input>
      </div>
      <div className="table5">
        <h2>MESA 5</h2>
        <input type="text"></input>
        <input type="image" src={check} alt="check"></input>
      </div>
      <div className="table6">
        <h2>MESA 6</h2>
        <input type="text"></input>
        <input type="image" src={check} alt="check"></input>
      </div>
      <div className = "arrowImg">
        <input type="image" onClick={() => history.goBack()} src={arrow} alt="arrow"  ></input>
      </div>
    </div>
  );
};
export default Waiter;
