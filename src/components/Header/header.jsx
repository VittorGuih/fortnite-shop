import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';

export function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='navbar'>
          <h1 className=''>
            <Link className='navbar__logo' to='/'>
              Logo
            </Link>
          </h1>
          <ul className='navbar__menu menu'>
            <li className='menu__item'>
              <Link className='menu__link' to='/'>
                Home
              </Link>
            </li>
            <li className='menu__item'>
              <Link className='menu__link' to='/store'>
                Store
              </Link>
            </li>
            <li className='menu__item'>
              <Link className='menu__link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
