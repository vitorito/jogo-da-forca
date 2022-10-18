import { Link } from 'react-router-dom';

function HomeButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Link to="/room/enter" className="btn">
        Jogar
      </Link>
      <Link to="/room/create" className="btn">
        Criar Sala
      </Link>
      <Link to="rooms" className="btn">
        Salas Criadas
      </Link>
    </div>
  );
}

export default HomeButtons;
