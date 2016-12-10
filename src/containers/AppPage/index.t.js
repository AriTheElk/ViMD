import React from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../AppPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppPage />, div);
});
