/* eslint-disable */
import React from 'react';

function Modal({ children, isOpen }) {
  return isOpen ? (
    <div className="fixed flex items-center justify-center w-screen h-screen top-0 left-0 bg-black/60">
      {children}
    </div>
  ) : null;
}

export default Modal;
