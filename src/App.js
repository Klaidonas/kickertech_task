import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import './/styles/style.css';
import './/styles/itemContainer.css';
import './/styles/suggestionsContainer.css';
import './/styles/header.css';
import FullItem from './components/FullItem';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="item" element={<FullItem />} /> 
    </Routes>
  </Router>
  );
}

export default App;
