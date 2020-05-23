import React from 'react';
import '../App.css';
import MenuItem from "./MenuItem";

function Menu(props) {
  return (
    <div>
      <ul>
        { props.menu.map(el => <MenuItem key={el} item={el} pressBtn={props.pressBtn}/>) }
      </ul>
    </div>

  );
}

export default Menu;
