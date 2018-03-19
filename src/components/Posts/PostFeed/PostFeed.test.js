import React from 'react';
import ReactDOM from 'react-dom';
import PostFeed from './PostFeed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostFeed />, div);
});
