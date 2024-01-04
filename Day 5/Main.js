import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
import './Maain.css';
import { useState } from 'react';
import Payment from './Payment.js';
import PaymentPage from './PaymentPage.js';
import Footer from './Footer.js';



const MyDropdown = () => {
  return(
    <header className='bb'>

      
      <div>
          <nav className='jj'>
              <Link to='/' className='tit'>LOCATIONS</Link>
              <ul >
                  <li ><NavLink to='/chennai' className='tit'>CHENNAI</NavLink></li>
                  <li><NavLink to='/cmb' className='tit'>COIMBATORE</NavLink></li>
                  
              </ul>
          </nav>
      </div>
      <Footer/>
    </header>

  );
}

export default MyDropdown;
