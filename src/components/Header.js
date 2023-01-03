import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [mobNav, setMobNav] = useState("none");
  const [activeBurger, setActiveBurger] = useState("none");
  const [inactiveBurger, setInactiveBurger] = useState("block");

  const handleBurger = () => {
    if(mobNav=="none") {
      setMobNav("block");
      setActiveBurger("block");
      setInactiveBurger("none")
    }
    else if(mobNav=="block") {
      setMobNav("none");
      setActiveBurger("none");
      setInactiveBurger("block")
    }
    console.log("hangleBurger display: " + mobNav);
  }

  return (
    <header>
      <nav className='desk-nav'>
        <div className="navigation">
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </nav>
      <nav className='mob-nav'>
        <div className="burger">
        <span className="active" onClick={handleBurger} style={{display: activeBurger}}>X</span>
        <span className="inactive" onClick={handleBurger}><FontAwesomeIcon icon={faBars} style={{display: inactiveBurger}}/></span>
        </div>
        <div className="navigation">
          <ul style={{display: mobNav}}>
            <li id='list-first-element' onClick={handleBurger}>Lorem ipsum</li>
            <li onClick={handleBurger}>Lorem ipsum</li>
            <li onClick={handleBurger}>Lorem ipsum</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;