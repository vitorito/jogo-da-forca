import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import CreatedRooms from './pages/createdRooms/CreatedRooms';
import CreateRoom from './pages/createRoom/CreateRoom';
import Home from './pages/home/Home';
import Room from './pages/room/Room';
import PlayerProvider from './providers/PlayerProvider';
import SelectRoomProvider from './providers/SelectRoomProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <MainContainer>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </MainContainer>
  );
}

export default App;
