import React from 'react';
import Routes from './Routes';

export default function App() {
  let classes = {
    backgroundColor: 'rgb(63, 90, 114)',
    minHeight: '100vh',
    width: '100%'
  }

  return (
    <div className={classes}>
      <Routes />
    </div>
  );
}

