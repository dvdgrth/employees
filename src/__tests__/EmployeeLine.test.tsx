import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import EmployeeLine from './../components/EmployeeLine';

const employee = {
  id: 4,
  firstName: "C3",
  lastName: "PO",
  jobTitle: "robot",
  avatar: "https://en.wikipedia.org/wiki/C-3PO#/media/File:C-3PO_droid.png",
  email: "uors@srouigh.werouih",
  ipAddress: "3453t345e643646",
  phone: "23432453",
  status: false,
  department: "sw"
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeLine employee={employee}/>, div);
});