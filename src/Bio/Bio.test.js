import React from 'react';
import ReactDOM from 'react-dom';
import Bio from './Bio.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bio />, div);
});
