import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
function Root() {
  return (
    <>
      <header className='primary-header d-flex'>
        <div>
          <img src={logo} alt='space tourism logo' className='logo' />
        </div>

        <nav>
          <ul
            id='primary-navigation'
            className='primary-navigation d-flex ff-sans-cond'
            data-visible='false'
          >
            <li>
              <Link to={'/'}>
                <span aria-hidden='true'>00</span>Home
              </Link>
            </li>
            <li>
              <Link to={'/destination'}>
                <span aria-hidden='true'>01</span>Destination
              </Link>
            </li>
            <li>
              <Link to={'/crew'}>
                <span aria-hidden='true'>02</span>Crew
              </Link>
            </li>
            <li>
              <Link to={'/technology'}>
                <span aria-hidden='true'>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
