import logo from './logo.svg';
import './App.css';
import React from 'react';
import {LoginPage} from './pages/connection';
import {NewsForm} from './pages/create_news';
import { Component } from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Index from './pages/index';
import { ListNews } from './pages/list_news';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

class App extends Component {

  constructor(props){
    super(props);
  }

  login = () => {
    UserProfile.createSession();
    this.setState({isLog: true});
  }

  logout = () => {
      UserProfile.reset();
      this.setState({isLog: false});
  }

  render() {
    const isLog = UserProfile.getIsSessionCurrent();
    console.log(isLog);
  return (
    <>
    <Navigation isLoggedIn={true}/>

      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/news_form' element={<NewsForm/>}></Route>
        <Route path='/news' element={<ListNews/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </>
  );
  }
}

export default App;
