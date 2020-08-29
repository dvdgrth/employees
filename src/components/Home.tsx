import React, { useState } from 'react';
import './Home.css';
import EmployeeList from './EmployeeList'
import SearchBar from './SearchBar';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAll, searchForSubstring } from '../DATA/apiInterfaces';


function Home() {
  const [DATA, setDATA] = useState(getAll());

  function updateDataSearch(substring: string) {
    setDATA(searchForSubstring(substring));
  }

  return (
      <div className="home">
        <h1 className="main-title">Robot Corporation</h1>
        <SearchBar updateDataSearch={updateDataSearch}/>
        <EmployeeList employeeData={DATA} />
      </div>
  );
}

export default Home;
