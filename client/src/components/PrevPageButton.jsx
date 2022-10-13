import React from 'react';
import { useNavigate } from 'react-router-dom';

function PrevPageButton() {
  const navigate = useNavigate();

  function goToPrevPage() {
    navigate(-1);
  }

  return (
    <button type="button" className="btn" onClick={goToPrevPage}>
      Voltar
    </button>
  );
}

export default PrevPageButton;
