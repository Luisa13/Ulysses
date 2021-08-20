import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./domain/components/authContext";
import {AuthRouteComponent} from "./domain/components/authRoute";
import Header from './presentation/components/headerBar';

import ListTripsUser from "./presentation/listTripsUser"; 
import Login from './presentation/Login';
import Register from './presentation/register';
import DetailTripStages from './presentation/detailTripStages';


function App() {

  return (
    <div className="App">
      

    <Header></Header>
      <header className="App-header"> </header>
      <AuthProvider>
          <Router>
            <Switch>

              <Route exact path = "/">
                <Login/>
              </Route>

              <Route exact path = "/register">
                <Register/>
              </Route>

              <AuthRouteComponent path = "/listTripsUser">
                  <ListTripsUser/>
              </AuthRouteComponent>

              <AuthRouteComponent path = "/detailTripStages">
                  <Route exact path="/detailTripStages" component={DetailTripStages}/>
              </AuthRouteComponent>

            </Switch>
          </Router>
      </AuthProvider>
    </div>
    
  );
}

export default App;
