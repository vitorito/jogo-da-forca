import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchRoom from '../../api/fetchRoom';
import { NicknameContext } from '../../providers/NicknameProvider';

const MAX_ROOM_ID = 9999;

function JoinRoom() {
  const { nick } = useContext(NicknameContext);
  const [roomId, setRoomId] = useState('');
  const [isJoinRoomBtnDisabled, setIsJoinRoomBtnDisabled] = useState(true);

  function updateJoinRoomBtn(id) {
    const isValidId = validateRoomId(id);
    setIsJoinRoomBtnDisabled(!isValidId);
  }

  function handleRoomIdChange(e) {
    const newRoomId = e.target.value;

    if (newRoomId.length > 4) return;

    setRoomId(() => newRoomId);
    updateJoinRoomBtn(newRoomId);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const room = await fetchRoom(roomId);
    console.log(room);
  }

  return (
    <div className="main-container sm:justify-center">
      <h1 className="page-title mb-28">
        <span>Junte-se a uma Sala</span>
      </h1>
      <div className="sm:shadow-lg sm:shadow-yellow-600 rounded-md sm:py-6 sm:px-5 m-auto sm:m-0">
        <div className="form-container text-lg">
          <div className="text-2xl text-center font-semibold mb-6">
            {nick.value}
          </div>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="roomId">
              <span>ID da Sala</span>
              <input
                type="number"
                value={roomId}
                onChange={handleRoomIdChange}
                placeholder="4 Digits..."
                max={MAX_ROOM_ID}
                className="input mb-2"
              />
            </label>
            <button
              disabled={isJoinRoomBtnDisabled}
              className="btn mt-4 mb-2 sm:mb-3"
              type="submit"
            >
              Entrar na Sala
            </button>
          </form>
          <Link to="/" className="btn">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}

function validateRoomId(id) {
  const hasCorrectLength = id.length === 4;
  const isWithinLimits = id >= 0 && id <= MAX_ROOM_ID;
  return hasCorrectLength && isWithinLimits;
}

export default JoinRoom;
