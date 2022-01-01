import React, { useState } from 'react';
import { FaDonate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/user.actions';

import Logo from '../../images/HermitPlusLogo.png';
import { sidebarItems } from '../../data/menu'; //? removed menuItems import

import './style/navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin; // todo bring in loading and error

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(userInfo);
  return (
    <>
      <nav className='navbar'>
        <Link
          to='/hermit-plus'
          className='navbar-logo'
          onClick={() => setSidebar(false)}>
          <img className='logo-img' src={Logo} alt='Hermits are the best' />
        </Link>

        <ul className='nav-items'>
          <li className='menu-item'>
            <Link to='/donate'>
              <FaDonate />
              <span>Donate</span>
            </Link>
          </li>
          {userInfo ? (
            <li className='menu-item'>
              <img
                src={`/images/profile/${userInfo.avatar}.png`}
                alt='avatar'
                onClick={handleLogout}
              />
            </li>
          ) : (
            <li className='menu-item'>
              <Link to='/login'>
                <FaDonate />
                <span>Login</span>
              </Link>
            </li>
          )}
        </ul>

        {/* <ul className='nav-items'>
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
        </ul> */}

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
