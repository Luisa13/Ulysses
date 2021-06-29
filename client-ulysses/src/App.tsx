import React from 'react';
import './App.css';
import ListUser from './presentation/ListUsers';
import ListStage from './presentation/ListStages';
import Login from './presentation/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
      </header>
    </div>
  );
}

export default App;
