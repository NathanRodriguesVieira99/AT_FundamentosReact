import React, { useEffect, useState } from 'react';
import User from '../../components/User/User';
import Post from '../../components/Post/Post';
import Comment from '../../components/Comment/Comment';
import Navbar from '../../components/NavBar/NavBar';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [layout, setLayout] = useState('grid'); // Adicione o estado para layout

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (selectedUserId) {
        try {
          const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`);
          const postsData = await postsResponse.json();
          setPosts(postsData);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    };

    fetchPosts();
  }, [selectedUserId]);

  useEffect(() => {
    const fetchComments = async () => {
      if (selectedPostId) {
        try {
          const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${selectedPostId}`);
          const commentsData = await commentsResponse.json();
          setComments(commentsData);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      }
    };

    fetchComments();
  }, [selectedPostId]);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  const handleCommentDelete = (commentId) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  const toggleLayout = () => {
    setLayout(prev => (prev === 'grid' ? 'list' : 'grid'));
  };

  const handleBack = () => {
    if (selectedPostId) {
      setSelectedPostId(null);
    } else if (selectedUserId) {
      setSelectedUserId(null);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar onBack={handleBack} title={selectedPostId ? "Comentários" : selectedUserId ? "Postagens" : "Usuários"} />
      <button onClick={toggleLayout}>
        Alternar Layout para {layout === 'grid' ? 'Lista' : 'Grade'}
      </button>
      {selectedPostId ? (
        <div>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
              onDelete={() => handleCommentDelete(comment.id)}
            />
          ))}
        </div>
      ) : selectedUserId ? (
        <div className={layout === 'grid' ? 'user-grid' : 'user-list'}>
          {posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              onClick={() => handlePostClick(post.id)}
            />
          ))}
        </div>
      ) : (
        <div className={layout === 'grid' ? 'user-grid' : 'user-list'}>
          {users.map(user => (
            <div key={user.id} onClick={() => handleUserClick(user.id)}>
              <User
                name={user.name}
                catchPhrase={user.company.catchPhrase}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchData;