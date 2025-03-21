import React from 'react'
import { NavLink } from 'react-router-dom';
import './MainNavigation.css'
const MainNavigation = () => {
  return (
    <header className='header'>
        <div className='logo'>Great Quotes</div>
        <nav className='nav'>
        <ul className='nav-list'>
            <li>
            <NavLink to='/quotes' activeClassName='active'>All Quotes</NavLink>
            </li>
            <li>
            <NavLink to='/new-quote' activeClassName='active'>Add a Quote</NavLink>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default MainNavigation