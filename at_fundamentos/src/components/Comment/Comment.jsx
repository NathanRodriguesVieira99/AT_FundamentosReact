import React from 'react';

import './comment.css'

function Comment({ name, email, body }) {
  const formatarNome = (nomeCompleto) => {
    const nomePartes = nomeCompleto.split(' ');
    return `${nomePartes[0]} ${nomePartes[nomePartes.length - 1]}`;
  };

  const formatarEmail = (email) => {
    const nomeDeUsuario = email.split('@')[0];
    return `@${nomeDeUsuario.toLowerCase()}`;
  };

  return (
    <div className='comments' id='comentarios'>
      <h1 className='name'>{formatarNome(name)}</h1>
      <p className='email'> {formatarEmail(email)}</p>
      <p className='body'>{body.length > 140 ? `${body.slice(0, 140)}...` : body}</p>
    </div>
  );
}

export default Comment;
