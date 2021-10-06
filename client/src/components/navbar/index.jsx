import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/HermitPlusLogo.png';
import { menuItems, sidebarItems } from '../../data/menu';

import './style/navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [showSide, setShowSide] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={() => setSidebar(false)}>
          <img className='logo-img' src={Logo} alt='Hermits are the best' />
        </Link>

        <ul className='nav-items'>
          {menuItems.map((item) => {
            return (
              <li key={item.id} className={item.mName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* <div className='sidebar-toggle'>
          {sidebar ? (
            <Icons.FaTimes
              className='sidebar-toggle-logo'
              onClick={() => setSidebar(!sidebar)}
            />
          ) : (
            <Icons.FaBars
              className='sidebar-toggle-logo'
              onClick={() => setSidebar(!sidebar)}
            />
          )}
        </div> */}
      </nav>

      <div
        className={sidebar ? 'sidebar active' : 'sidebar'}
        onMouseEnter={() => setShowSide(true)}
        onMouseLeave={() => setShowSide(false)}>
        <ul className='sidebar-items'>
          {sidebarItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}>
                <Link to={item.path}>
                  {item.icon}
                  <span className={showSide ? 'show' : ''}>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
