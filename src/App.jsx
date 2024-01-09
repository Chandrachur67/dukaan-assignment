import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import Payments from './pages/Payments'

const App = () => {
  return (
    <Router>
      <div>
        <Payments />
      </div>
    </Router>
  );
};

export default App
