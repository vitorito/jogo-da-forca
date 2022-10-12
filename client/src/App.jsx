import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RopeBackground from './components/RopeBackground';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <RopeBackground />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
