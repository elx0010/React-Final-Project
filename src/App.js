
import './index.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Show from './pages/Show';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
