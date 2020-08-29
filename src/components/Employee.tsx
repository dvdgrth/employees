import React from 'react'
import { useLocation } from 'react-router-dom';
import './Employee.css'
// import queryString from 'query-string'

import getEmployeeDataById from '../DATA/apiInterfaces'
const queryString = require('query-string');


function Employee() {
    const location = useLocation();
    console.log(location.search);
    let params = queryString.parse(location.search);
    console.log(params);

    if(!params.employeeID) {
        alert("No employee selected.");
        return (
            <div className="employee-background-div">No Employeed selected.</div>
        )
    }

    console.log(`searching for ${params.employeeID}`);
    console.log(getEmployeeDataById(parseInt(params.employeeID)));
    const employeeData = getEmployeeDataById(parseInt(params.employeeID));

    let color;
    if (employeeData.status) {
        color = "#f7331ecc";
    } else {
        color = "#40ad11aa";
    }
    const mailLink = `mailto:${employeeData.email}`;

    return (
        <div className="employee-background-div">
            <div className="employee-div">
                <div className="employee-name-div" >{employeeData.lastName}, {employeeData.firstName}</div>
                <div className="employee-avatar-div" style={{backgroundImage: `url(${employeeData.avatar}), radial-gradient(rgb(240, 240, 240), rgb(83, 83, 83)) ` }}></div>
                <div className="employee-job-div" >{employeeData.jobTitle}</div>
                <div className="employee-ip-div" >{employeeData.ipAddress}</div>
                <div className="employee-status-div" style={{backgroundColor: color}}></div>
                <div style={{gridArea:"departmentTitle", color: "rgb(194, 194, 194)"}}>Department:</div>
                <div className="employee-department-div">{employeeData.department}</div>
                <div style={{gridArea:"emailTitle", color: "rgb(194, 194, 194)"}}>Email:</div>
                <div className="employee-email-div">
                    {/* Mailto:{employeeData.email} */}
                    <a href={mailLink}>{employeeData.email}</a> 
                    </div>
                <div style={{gridArea:"phoneTitle", color: "rgb(194, 194, 194)"}}>Phone:</div>
                <div className="employee-phone-div">{employeeData.phone}</div>
            </div>

        </div>
    )
}

export default Employee
