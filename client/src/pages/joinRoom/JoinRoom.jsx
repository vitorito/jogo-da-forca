import { useContext, useState } from 'react';
import PrevPageButton from '../../components/PrevPageButton';
import { NicknameContext } from '../../providers/NicknameProvider';

const MAX_ROOM_ID = 9999;

function JoinRoom() {
  const { nick } = useContext(NicknameContext);
  const [roomId, setRoomId] = useState('');
  const [roomPassword, setRoomPassword] = useState('');
  const [isJoinRoomBtnDisabled, setIsJoinRoomBtnDisabled] = useState(true);

  function updateJoinRoomBtn(id, password) {
    const isValidForm = validateRoomId(id) && validateRoomPassword(password);
    setIsJoinRoomBtnDisabled(!isValidForm);
  }

  function handleRoomIdChange(e) {
    const newRoomId = e.target.value;
    console.log(newRoomId);
    if (newRoomId.length > 4) return;

    setRoomId(() => newRoomId);
    updateJoinRoomBtn(newRoomId, roomPassword);
  }

  function handleRoomPasswordChange(e) {
    const newRoomPassword = e.target.value.trim();
    setRoomPassword(() => newRoomPassword);
    updateJoinRoomBtn(roomId, newRoomPassword);
  }

  return (
    <div className="main-container">
      <h1 className="text-3xl text-center">
        <span>Junte-se a uma Sala</span>
      </h1>
      <div className="sm:shadow-lg sm:shadow-yellow-600 rounded-md sm:py-6 sm:px-5 m-auto">
        <div className="form-container m-auto text-lg">
          <div className="text-2xl m-auto">{nick.value}</div>
          <form>
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
            <label htmlFor="roomPassword">
              <span>Senha</span>
              <input
                type="password"
                value={roomPassword}
                onChange={handleRoomPasswordChange}
                placeholder="4 Digits..."
                maxLength={4}
                className="input"
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
          <PrevPageButton />
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

function validateRoomPassword(roomPassword) {
  const hasCorrectLength = roomPassword.length === 4;
  return hasCorrectLength;
}

export default JoinRoom;
