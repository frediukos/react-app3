import React from 'react';
import '../App.css';
import Menu from "./Menu";
import logo from '../img/logo_alex_circle2.png';

function Header(props) {
  return (
    <div className='header'>
      <img src={logo} alt='Alex Logo' width={150} onClick={() => {props.pressLogo()} } />
      <Menu menu={props.menu} pressBtn={props.pressBtn}/>
    </div>

  );
}

export default Header;
