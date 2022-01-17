import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./domain/components/authContext";
import {AuthRouteComponent} from "./domain/components/authRoute";
import Header from './presentation/components/headerBar';

import ListTripsUser from "./presentation/listTripsUser"; 
import Login from './presentation/Login';
import Register from './presentation/register';
//import DetailTripStages from './presentation/detailTripStages';
import DetailTableTripStages from './presentation/components/detailTableTripStages';

function App() {

  return (
    <div className="App">

    
      <header className="App-header"> </header>
      <AuthProvider>
        <Header></Header>
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

              <AuthRouteComponent path = "/detailTableTripStages">
                  <Route exact path="/detailTableTripStages" component={DetailTableTripStages}/>
              </AuthRouteComponent>

            </Switch>
          </Router>
      </AuthProvider>
     
    </div>
    
  );
}

export default App;
