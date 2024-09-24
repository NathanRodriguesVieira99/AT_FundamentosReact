import React, { useEffect, useState } from 'react';

import FetchData from './API/FetchData/FetchData';

import './global.css'

import User from './components/User/User';
import Post from './components/Post/Post';
import Comment from './components/Comment/Comment';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState(null);

  //ver retorno da api no console
  useEffect(() => {
    const fetchDados = async () => {
      const users = await FetchData.fetchUsers();
      setUsers(users);
      const posts = await FetchData.fetchPosts(users[0]?.id);
      setPosts(posts);
    };
    fetchDados();
  }, []);

  const handleUserClick = async (userId) => {
    setSelectedUser(userId);
    const userPosts = await FetchData.fetchPosts(userId);
    setPosts(userPosts);
  };

  const handlePostClick = async (postId) => {
    setSelectedPosts(postId);
    const postComments = await FetchData.fetchComments(postId);
    setComments(postComments);
  };

  return (
    <div className="App">
      <NavBar />
      <header>
        <h1 className='fakebook'>FakeBook</h1>
      </header>
      <main>
        {selectedPosts ? (
          <>
            <button type="button" onClick={() => setSelectedPosts(null)}>
              Voltar
            </button>
            <div className="comments-grid">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  email={comment.email}
                  body={comment.body}
                />
              ))}
            </div>
          </>
        ) : selectedUser ? (
          <>
            <button type="button" onClick={() => setSelectedUser(null)}>
              Voltar
            </button>
            <div className="post-grid">
              {posts.map((post) => (
                <Post
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  onClick={() => handlePostClick(post.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="user-grid">
            {users.map((user) => (
              <User
                key={user.id}
                name={user.name}
                catchPhrase={user.company.catchPhrase}
                onClick={() => handleUserClick(user.id)}
              />
            ))}
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 AT Fundamentos React</p>
      </footer>
    </div>
  );
}

export default App;
