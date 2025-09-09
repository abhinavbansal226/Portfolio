// src/RootLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;