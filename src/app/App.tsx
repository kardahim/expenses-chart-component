import React from 'react';
// import global style
import './scss/global.scss'

// import components
import TopCard from '../components/top-card/top-card';
import MainCard from '../components/main-card/main-card';
import Attribution from '../components/attribution/attribution';

function App() {
  return (
    <div className="App">
      <TopCard />
      {/* <MainCard /> */}
      {/* <Attribution /> */}
    </div>
  );
}

export default App;
