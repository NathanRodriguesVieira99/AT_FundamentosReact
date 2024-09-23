import React, { useEffect, useState } from 'react';

import FetchData from './API/FetchData/FetchData';

import User from './components/User/User';


function App() {
  const [users, setUsers] = useState([])

  //ver api no console
  useEffect(() => {
    const FetchDados = async () => {
      const users = await FetchData.fetchUsers();
      console.log('Usuários :', users);
      setUsers(users);

      const posts = await FetchData.fetchPosts(1);
      console.log('Posts:', posts);

      const comments = await FetchData.fetchComments(1);
      console.log('Comentários', comments);

    }
    FetchDados()
  }, [])



  return (
    <div className="App">
      <header>
        <h1>FakeBook</h1>
      </header>
      <main>
        <div className="user-grid">
          {users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              catchPhrase={user.company.catchPhrase}
            />
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 AT Fundamentos React</p>
      </footer>
    </div>
  );
}

export default App;
