import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import CreatedRooms from './pages/createdRooms/CreatedRooms';
import CreateRoom from './pages/createRoom/CreateRoom';
import Home from './pages/home/Home';
import Room from './pages/room/Room';
import PlayerProvider from './providers/PlayerProvider';
import SelectRoomProvider from './providers/SelectRoomProvider';

function App() {
  return (
    <MainContainer>
      <PlayerProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/create" element={<CreateRoom />} />
            <Route
              path="/rooms"
              element={
                <SelectRoomProvider>
                  <CreatedRooms />
                </SelectRoomProvider>
              }
            />
            <Route path="/:id" element={<Room />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </PlayerProvider>
    </MainContainer>
  );
}

export default App;
