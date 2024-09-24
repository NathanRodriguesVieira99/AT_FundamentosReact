import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";

import './Comment.css'

function Comment({ name, email, body, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const confirmDelete = () => {
    if (showConfirmation) {
      onDelete();
    } else {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="comments">
      <h3>{name}</h3>
      <p className="email">{email}</p>
      <p>{body}</p>
      <button className="delete-btn" onClick={confirmDelete}>
        <FaTrash /> {showConfirmation ? "Confirma?" : "Excluir"}
      </button>
      {showConfirmation && (
        <button className="cancel-btn" onClick={() => setShowConfirmation(false)}>
          Cancelar
        </button>
      )}
    </div>
  );
}

export default Comment;
