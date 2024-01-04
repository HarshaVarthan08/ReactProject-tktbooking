import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
export const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/' className='title'>CineBooks</Link>
            <ul>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/signup'>Signup</NavLink></li>
               
                
            </ul>
        </nav>
    </div>
  )
}
export default Navbar;
