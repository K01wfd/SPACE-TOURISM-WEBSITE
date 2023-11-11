import React from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>hello</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
