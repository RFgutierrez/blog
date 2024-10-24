import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import CommonScams from './pages/CommonScams';
import Prevention from './pages/Prevention';
import Report from './pages/Report';
import Resources from './pages/Resources';
import './styles/custom.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container-fluid p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/common-scams" element={<CommonScams />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/report" element={<Report />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;