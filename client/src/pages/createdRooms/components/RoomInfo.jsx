import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';
import RoomDetails from './RoomDetails';
import RoomPassword from './RoomPassword';
import RoomThemes from './RoomThemes';

function RoomInfo({ roomPassword, setRoomPassword }) {
  const { selectedRoom: room } = useContext(SelectRoomContext);

  return (
    <div
      className="bg-yellow-600 flex flex-col justify-between gap-3 h-full p-4 sm:p-6
      border-2 border-black rounded-lg overflow-auto shadow shadow-black font-medium"
    >
      <div className="rounded-gray-bg flex items-center justify-center gap-2 w-fit px-5 m-auto">
        {room.isPrivate && <FaLock />}
        <span>Sala {room.id}</span>
      </div>
      <RoomDetails />
      <div className="flex flex-col grow overflow-auto">
        <span className="rounded-gray-bg px-2 w-fit mx-auto mb-2">
          {room.themes.length} Temas
        </span>
        <RoomThemes />
      </div>
      {room.isPrivate && (
        <RoomPassword value={roomPassword} setValue={setRoomPassword} />
      )}
    </div>
  );
}

RoomInfo.propTypes = {
  roomPassword: PropTypes.string.isRequired,
  setRoomPassword: PropTypes.func.isRequired,
};

export default RoomInfo;
