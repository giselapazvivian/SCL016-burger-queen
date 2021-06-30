//import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Home from './components/Home'
import Waiter from './components/Waiter'
// import Logo from './components/Logo'
import React from "react";
=======
import React,{useState} from "react";
import Home from './components/Home'
import Waiter from './components/Waiter'
import Menu from './components/Menu'
import nameContext from './nameContext';

>>>>>>> c49a859608c5caf89d43d187094bdcde9e896d45
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
      <div className="header">
<<<<<<< HEAD
        <nav>
          <ul>
            <li className='linkHome'>
              <Link to="/">Inicio</Link>
            </li>
            <li className='linkWainter'>
              <Link to="/Waiter">Mesero</Link>
            </li>
            <li className='linkUsers'>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Waiter">
            <Waiter />
=======
        <Switch>
        <Route path="/Waiter" exact>
            <Waiter />
          </Route>
          <Route path="/Menu">
            <Menu />
>>>>>>> c49a859608c5caf89d43d187094bdcde9e896d45
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </nameContext.Provider>
  );
}

export default App;