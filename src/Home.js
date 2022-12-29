import React from 'react';
import FullItem from './components/FullItem';
import ItemContainer from './components/ItemContainer';
import Suggestions from './components/Suggestions';

const Home = () => {
  return (
    <div>
      <div className="content">
        <FullItem />
        <FullItem />
      </div>
    </div>
  );
};

export default Home;