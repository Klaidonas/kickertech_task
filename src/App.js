import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import './/styles/style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
    </Routes>
  </Router>
  );
}

export default App;
