import React, { useEffect } from 'react';

import FetchData from './API/FetchData/FetchData';

function App() {
  useEffect(() => {
    const FetchDados = async () => {
      const users = await FetchData.fetchUsers();
      console.log('Usuários :', users);


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

      </main>
      <footer>
        <p>&copy; 2024 AT Fundamentos React</p>
      </footer>
    </div>
  );
}

export default App;
