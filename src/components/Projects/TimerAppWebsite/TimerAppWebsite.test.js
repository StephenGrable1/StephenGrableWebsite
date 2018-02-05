import React from 'react';
import ReactDOM from 'react-dom';
import TimerAppWebsite from './TimerAppWebsite.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimerAppWebsite />, div);
});
