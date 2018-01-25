import React from 'react';
import ReactDOM from 'react-dom';
import DannyBobbyWebsite from './DannyBobbyWebsite.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DannyBobbyWebsite />, div);
});
