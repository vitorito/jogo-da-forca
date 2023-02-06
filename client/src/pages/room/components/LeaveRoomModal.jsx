import PropTypes from 'prop-types';
import React from 'react';
import { GiExitDoor } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/Modal';
import leaveRoom from '../../../socket/leaveRoom';

function LeaveRoomModal({ isOpen, close }) {
  const navigate = useNavigate();

  function handleExitButtonClick() {
    leaveRoom();
    navigate('/');
  }

  return (
    <Modal isOpen={isOpen}>
      <div
        className="bg-gray-400 sm:py-6 flex flex-col items-center justify-between
        w-[80vw] max-w-md h-60 sm:h-72 p-4 rounded-lg shadow-md shadow-black/80
        modal-animation"
      >
        <span className="page-title">Sair da Sala?</span>
        <GiExitDoor size={80} className="fill-slate-900" />
        <div className="flex gap-4 sm:px-4 w-full">
          <button
            type="button"
            onClick={close}
            className="btn hover:bg-blue-700"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleExitButtonClick}
            className="btn bg-red-600 hover:bg-red-700"
          >
            Sair
          </button>
        </div>
      </div>
    </Modal>
  );
}

LeaveRoomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default LeaveRoomModal;
