import React from 'react';
import { Link } from 'react-router-dom'


function Header() {
  return (
      <nav className='green darken-1'>
      <div class="nav-wrapper">
        <Link to='/' class="brand-logo">
        <img className="logo" src={process.env.PUBLIC_URL + '/icons/plate.png'} />
          </Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
              <Link to='/about'>About</Link>
              </li>
          <li>
             <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </div>
   </nav>
  );
}

export { Header };