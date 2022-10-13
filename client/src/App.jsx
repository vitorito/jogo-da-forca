import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RopeBackground from './components/RopeBackground';
import EnterRoom from './pages/joinRoom/JoinRoom';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <RopeBackground />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/enter" element={<EnterRoom />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
