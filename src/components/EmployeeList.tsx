import React from 'react'
import './EmployeeList.css'
import EmployeeLine from './EmployeeLine'

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
    employeeData:  Employee[];
}

function EmployeeList(props: Props) {
    const listItems = props.employeeData.map((employee) =>
        <EmployeeLine key={employee.id} employee={employee}/>
    );

    return (
        <div className="employee-list">
            {listItems}
        </div>
    )
}

export default EmployeeList
