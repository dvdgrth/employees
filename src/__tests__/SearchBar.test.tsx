import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SearchBar from './../components/SearchBar';


function stubUpdateDataSearch(substring: string) {
  return;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar updateDataSearch={stubUpdateDataSearch}/>, div);
});
