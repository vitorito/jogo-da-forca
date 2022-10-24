import React from 'react';
import gc from '../../../config/gameConstraints';

function RoomPassword() {
  return (
    <label htmlFor="password">
      Senha
      <input
        type="password"
        id="password"
        placeholder="4 Dígitos..."
        maxLength={gc.ROOM_PASSWORD_LENGTH}
        className="block w-full px-2 placeholder:text-black placeholder:text-base
      border-b border-gray-900 outline-none rounded"
      />
    </label>
  );
}

export default RoomPassword;
