import React from 'react';
import { NavLink } from 'react-router-dom';

// NavLink Component is a special version of the Link Component. It adds styling attributes to the rendered element when it matches the current URL.
// Navigation links
{/* Using 'exact to' will ensure the Home link Highlight will only remain active when hovered/click on  */}

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to= "/" activeStyle={{ background: 'pink'}}>Home</NavLink></li>
      <li><NavLink to= "/DailyHoroscopes" >Daily Horoscopes</NavLink></li>
      <li><NavLink to= "/WeeklyHoroscopes" >Weekly Horoscopes</NavLink></li>
      <li><NavLink to= "/AboutUs" >About</NavLink></li>
    </ul>    
  </header>
);

export default Header;