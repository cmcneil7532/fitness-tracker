import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Dashboard</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/history'>History</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar