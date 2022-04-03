import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NewsForm} from './pages/create_news';
import {LoginPage} from './pages/connection';

function App() {
  return (
    <div className="App">
      <h1>Tertoui</h1>

      <h3>LE site d'actualité</h3>
      <LoginPage/>
    </div>
  );
}

export default App;
