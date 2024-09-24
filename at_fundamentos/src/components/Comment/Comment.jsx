import React from 'react';

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
      <h1>{formatarNome(name)}</h1>
      <p>{formatarEmail(email)}</p>
      <p>{body.length > 140 ? `${body.slice(0, 140)}...` : body}</p>
    </div>
  );
}

export default Comment;
