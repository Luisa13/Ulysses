import React from 'react';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ListUser from './presentation/ListUsers';
import ListStage from './presentation/ListStages';
import Login from './presentation/Login';

function App() {
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="App-header"> </header>
        <div className="outer">
        <div className="inner">
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default App;
