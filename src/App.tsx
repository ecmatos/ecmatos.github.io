import React from 'react';
import Global from './styles/global';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;