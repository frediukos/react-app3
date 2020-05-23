import React from 'react';
import '../App.css';

function Body(props) {
  return (
    <div>
      <p>To see the message in Console Tab   </p>
      <button onClick={() => {props.bodyText(`Hello!
    You can press on LOGO
    or
    on  MENU items...`)}}> PRESS ME </button>
    </div>

  );
}

export default Body;
