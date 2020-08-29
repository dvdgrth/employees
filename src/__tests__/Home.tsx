import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Home from './../components/Home';

test('renders title', () => {
  const { getByText } = render(<Home />);
  const title = getByText(/Robot Corporation/i);
  expect(title).toBeInTheDocument();
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
