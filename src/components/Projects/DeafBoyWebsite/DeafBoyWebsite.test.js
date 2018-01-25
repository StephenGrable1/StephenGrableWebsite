import React from 'react';
import ReactDOM from 'react-dom';
import DeafBoyWebsite from './DeafBoyWebsite.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeafBoyWebsite />, div);
});
