import React from 'react'
import './EmployeeLine.css'
import { useHistory } from "react-router-dom";

interface Employee {
    "id": number;
    "firstName": string;
    "lastName": string;
    "jobTitle": string;
    "avatar": string;
    "ipAddress": string;
    "phone": string;
    "email": string;
    "department": string;
    "status": boolean;
}

interface Props {
    employee: Employee;
}

function EmployeeLine(props: Props) {
    const history = useHistory();

    function employeeClicked(event: React.MouseEvent) {
        // console.log(event.currentTarget);

          history.push({
            pathname: '/employee',
            search: `?employeeID=${props.employee.id}`,
            state: { detail: "test" }
          });

    }

    let color;
    if (props.employee.status) {
        color = "#f7331ecc";
    } else {
        color = "#40ad11aa";
    }
    return (
        <div className="employee-line-div" onClick={employeeClicked}>
            <div className="avatar-line" style={{backgroundImage: `url(${props.employee.avatar}), radial-gradient(rgb(240, 240, 240), rgb(83, 83, 83)) ` }}></div>
            <div className="name-line">{props.employee.lastName}, {props.employee.firstName}</div>
            <div className="job-line">{props.employee.jobTitle}</div>
            <div className="ip-line">{props.employee.ipAddress}</div>
            <div className="status-line" style={{backgroundColor: color}}></div>
        </div>
    )
}

export default EmployeeLine