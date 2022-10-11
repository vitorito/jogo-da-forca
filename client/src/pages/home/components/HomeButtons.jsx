import { Link } from 'react-router-dom';

function HomeButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Link to='/room/enter' className="home-btn">
        Jogar
      </Link>
      <Link to="/room/create" className="home-btn">
        Criar Sala
      </Link>
      <Link to="room" className="home-btn">
        Salas Criadas
      </Link>
    </div>
  );
}

export default HomeButtons;
