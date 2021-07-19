import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import ListUser from './presentation/ListUsers';
//import ListStage from './presentation/ListStages';
import EntryPage from "./presentation/Entry"; //TEMPORAL
import Login from './presentation/Login';
import {AuthProvider} from "./domain/components/authContext";
import {AuthRouteComponent} from "./domain/components/authRoute";

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
      <AuthProvider>
          <Router>
            <Switch>

              <Route exact path = "/">
                <Login/>
              </Route>
              <AuthRouteComponent exact path = "/Entry">
                <EntryPage/>
              </AuthRouteComponent>
              
            </Switch>
          </Router>
      </AuthProvider>
    </div>
    
  );
}

export default App;
