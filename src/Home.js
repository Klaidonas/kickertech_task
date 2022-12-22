import React from 'react';
import ItemContainer from './components/ItemContainer';
import Suggestions from './components/Suggestions';

const Home = () => {
  return (
    <div>
      <div className="content">
        <ItemContainer />      
        <ItemContainer />      
        <ItemContainer />
      </div>
      <Suggestions></Suggestions>   
    </div>
  );
};

export default Home;