import React from 'react';
import logo from './logo.svg';
// import './App.css';

import Navigation from './components/Navigation';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <TodoList/>
    </div>
  );
}

export default App;
