import React from 'react';
import './home.css'
import HomePage from '../srcFiles-homePage/homePage';
import MainPageContainer from '../srcFiles-MainPage/main-page';
import Community from '../../components/component-community/component-community-src/comunity'
function App() {
  return (
    <div id='bodyConatiner'>
      {/* <HomePage/> */}
      {/* <MainPageContainer/> */}
      <Community/>
    </div>
  );
}

export default App;
