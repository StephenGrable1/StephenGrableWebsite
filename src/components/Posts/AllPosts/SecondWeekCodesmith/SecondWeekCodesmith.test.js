import React from 'react';
import ReactDOM from 'react-dom';
import FirstWeekCodesmith from './FirstWeekCodesmith';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstWeekCodesmith />, div);
});
