
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Waiter from './components/Waiter'
// import Logo from './components/Logo'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // return (
  //   <div className='background'>
  //     <Inicio/>
  //   </div>
  // );
  return (
    <Router>
      <div className="header">
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
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

