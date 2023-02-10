import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import CreatedRooms from './pages/createdRooms/CreatedRooms';
import CreateRoom from './pages/createRoom/CreateRoom';
import Home from './pages/home/Home';
import Room from './pages/room/Room';
import MatchProvider from './providers/MatchProvider';
import PlayerProvider from './providers/PlayerProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <MainContainer>
      <QueryClientProvider client={queryClient}>
        <PlayerProvider>
          <MatchProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateRoom />} />
                <Route path="/rooms" element={<CreatedRooms />} />
                <Route path="/:id" element={<Room />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Router>
          </MatchProvider>
        </PlayerProvider>
      </QueryClientProvider>
    </MainContainer>
  );
}

export default App;
