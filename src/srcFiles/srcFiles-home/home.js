import React from 'react';
import NavBar from '../../components/components-navBar/navBar';
import './home.css'
import MainBar from '../../components/component-mainBar/mainBar';
import Slider from '../../components/slider/slider-src/slider.js'
function App() {
  return (
    <div className='navBar'>
      {/* <NavBar></NavBar>
      <Slider/> */}
      <MainBar></MainBar>
    </div>
  );
}

export default App;
