import './App.css';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Enrolled from './components/Enrolled'

function App() {
  return (
    <div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enrolled" element={<Enrolled />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
