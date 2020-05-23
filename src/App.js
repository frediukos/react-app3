import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";

function App() {

  const menu = ['About', 'Video', 'Pictures', 'Shop', 'Contacts'];

  const bodyText = (text) => {
    console.log(text);
  };

  const pressOnLogo = () => {
    console.log("You've pressed on logo");
  };

  const pressBtn = (btn) => {
    console.log(`You've pressed on ${btn} item`);
  };


  return (
    <div className="App">
      <Header menu={menu} pressLogo={pressOnLogo} pressBtn={pressBtn} />
      <Body bodyText={bodyText}/>
    </div>
  );
}

export default App;
