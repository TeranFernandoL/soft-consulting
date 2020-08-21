import React from 'react';
import Rutas from './components/layout/Rutas'
import './public/cssNav/cssNav.css';
function App() {
  if(localStorage.getItem('TIRS_token') == undefined){
    localStorage.setItem('TIRS_token', '')
  }

  return (
      <Rutas />
  );
}

export default App;
