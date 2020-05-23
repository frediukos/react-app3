import React from 'react';
import '../App.css';


function MenuItem(props) {

  const press = () => {
    props.pressBtn(props.item)
  };

  return (
        <li>
          <button onClick={press}>{props.item}</button>
        </li>
  );
}

export default MenuItem;
