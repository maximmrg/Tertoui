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
import { CreateAccount } from './pages/create_account';
import Cookies from 'universal-cookie';
import { PrivateRoute } from './components/PrivateRoute';

class App extends Component {

  constructor(props) {
    super(props);

    const cookies = new Cookies();



    this.state = {
      isLoggedIn: cookies.get('isActive'),
      pseudo: cookies.get('login'),
    };
  }

  componentDidMount(){
    const cookies = new Cookies();

    UserProfile.setPseudo(cookies.get('login'));
    console.log(cookies.get('login'));
  }

    login = () => {
      this.setState({ isLoggedIn: true, pseudo: UserProfile.getPseudo(), });
    };
  
    logout = () => {
      UserProfile.reset();
      this.setState({ isLoggedIn: false });
    };

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    const pseudo = this.state.pseudo;
  return <>
    <Navigation isLoggedIn={isLoggedIn} logout={this.logout.bind(this)} pseudo={pseudo}/>

      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/news_form' element={
            <PrivateRoute>
              <NewsForm/>
            </PrivateRoute>
          }>
        </Route>
        <Route path='/news' element={<ListNews/>}></Route>
        <Route path='/login' element={<LoginPage login={this.login.bind(this)}/>}></Route>
        <Route path='/logon' element={<CreateAccount/>}></Route>
      </Routes>
    </>
  }
  
}

export default App;
