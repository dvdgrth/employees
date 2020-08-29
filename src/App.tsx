import React from 'react';
import './App.css';
// import EmployeeList from './components/EmployeeList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import DATA from './DATA/MOCK_DATA_2.json';
import Home from './components/Home'
import Employee from './components/Employee'
import Authentication from './components/Authentication'
import LoginLogout from './components/LoginLogout'

function App() {

  return (
    <Router>
      <Authentication>
        <Switch>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <LoginLogout />
      </Authentication>
    </Router>

  );
}

export default App;
