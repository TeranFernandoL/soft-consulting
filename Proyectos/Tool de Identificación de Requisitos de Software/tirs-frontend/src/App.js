import React from 'react';

import Rutas from './components/layout/Rutas'
import Nav from './components/layout/Nav'
import './public/cssNav/cssNav.css';
function App() {
  return (
    <>
      <div className=" ">
      <Nav />
      <Rutas />
      </div>
      
    </>
  );
}

export default App;
