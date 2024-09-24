import React from 'react';

import './Post.css'

function Post({ title, body, onClick }) {
  return (
    <div className='Post' id='posts' onClick={onClick}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
