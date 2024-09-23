import React from 'react';

import FetchData from './API/FetchData/FetchData';

function App() {
  return (
    <div className="App">
      <header>
        <h1>FakeBook</h1>
      </header>
      <main>
        <FetchData />
      </main>
      <footer>
        <p>&copy; 2024 AT Fundamentos React</p>
      </footer>
    </div>
  );
}

export default App;
