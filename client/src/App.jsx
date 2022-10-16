import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RopeBackground from './components/RopeBackground';
import CreateRoom from './pages/createRoom/CreateRoom';
import Home from './pages/home/Home';
import JoinRoom from './pages/joinRoom/JoinRoom';
import NicknameProvider from './providers/NicknameProvider';

function App() {
  return (
    <>
      <RopeBackground />
      <NicknameProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/enter" element={<JoinRoom />} />
            <Route path="/room/create" element={<CreateRoom />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </NicknameProvider>
    </>
  );
}

export default App;
