import React from 'react';

const Comment = ({ name, email, body, onDelete }) => {
  const [firstName, lastName] = name.split(' ');

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja excluir este comentário?")) {
      onDelete();
    }
  };

  return (
    <div className="comment-card">
      <h4>{`${firstName} ${lastName}`}</h4>
      <p>{email.replace(/.+?@/, '@')}</p>
      <p>{body.length > 140 ? `${body.slice(0, 140)}...` : body}</p>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
};

export default Comment;