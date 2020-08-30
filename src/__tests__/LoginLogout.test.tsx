import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import LoginLogout from './../components/LoginLogout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginLogout />, div);
});
