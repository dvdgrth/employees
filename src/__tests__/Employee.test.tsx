import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Employee from './../components/Employee';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Employee/>, div);
});
