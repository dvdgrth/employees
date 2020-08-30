import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Authentication from './../components/Authentication';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Authentication >
    </Authentication >
    , div);
});