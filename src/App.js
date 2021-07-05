//import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import Home from './components/Home'
import Waiter from './components/Waiter'
import Orders from './components/Orders'
import nameContext from './nameContext';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [name,setName] = useState(null);
  const updateName =(value)=>{
    setName(value)
  }
  return (
  <nameContext.Provider value={{name,updateName}}>
    <Router>
     
        <Switch>
        <Route path="/Waiter" exact>
            <Waiter />
          </Route>
          <Route path="/Orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
    </nameContext.Provider>
  );
}

export default App;