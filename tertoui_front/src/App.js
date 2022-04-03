import logo from './logo.svg';
import './App.css';
import React from 'react';
import {LoginPage} from './pages/connection';
import {NewsForm} from './pages/create_news';
import { Component } from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Index from './pages/index';

class App extends Component {
  render() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/news_form' element={<NewsForm/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </>
  );
  }
}

export default App;
