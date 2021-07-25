import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./domain/components/authContext";
import {AuthRouteComponent} from "./domain/components/authRoute";

//import ListUser from './presentation/ListUsers';
//import ListStage from './presentation/ListStages';
import ListTripsUser from "./presentation/listTripsUser"; 
import AddNewTripModal from "./presentation/use-cases/addTrip"
import Login from './presentation/Login';


function App() {
  return (
    <div className="App">

      
      
      <header className="App-header"> </header>
      <AuthProvider>
          <Router>
            <Switch>

              <Route exact path = "/">
                <Login/>
              </Route>

              <AuthRouteComponent path = "/listTripsUser">
                  <ListTripsUser/>
              </AuthRouteComponent>
              
            </Switch>
          </Router>
      </AuthProvider>
    </div>
    
  );
}

export default App;
