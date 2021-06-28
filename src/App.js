
//import logo from './logo.svg';
import './App.css';
import Inicio from './components/Inicio'
import Mesero from './components/Mesero'
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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/mesero">Mesero</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mesero">
            <Mesero />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

