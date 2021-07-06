import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><Link exact to= "/" >Home</Link></li>
      <li><Link to= "/DailyHoroscopes" >Daily Horoscopes</Link></li>
      <li><Link to= "/AboutUs" >About</Link></li>
    </ul>    
  </header>
);

export default Header;