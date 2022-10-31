import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import CreatedRooms from './pages/createdRooms/CreatedRooms';
import CreateRoom from './pages/createRoom/CreateRoom';
import Home from './pages/home/Home';
import JoinRoom from './pages/joinRoom/JoinRoom';
import Room from './pages/room/Room';
import MatchProvider from './providers/MatchProvider';
import NicknameProvider from './providers/NicknameProvider';
import SelectRoomProvider from './providers/SelectRoomProvider';

function App() {
  return (
    <MainContainer>
      <NicknameProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/enter" element={<JoinRoom />} />
            <Route path="/room/create" element={<CreateRoom />} />
            <Route
              path="/rooms"
              element={
                <SelectRoomProvider>
                  <CreatedRooms />
                </SelectRoomProvider>
              }
            />
            <Route
              path="/:id"
              element={
                <MatchProvider>
                  <Room />
                </MatchProvider>
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </NicknameProvider>
    </MainContainer>
  );
}

export default App;
