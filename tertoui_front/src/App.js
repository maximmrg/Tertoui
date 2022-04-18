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
import {ReactSession} from 'react-client-session';

// import Cookies from 'universal-cookie';
import { PrivateRoute } from './components/PrivateRoute';

class App extends Component {

  constructor(props) {
    super(props);
    ReactSession.setStoreType("localStorage");

    try {
      ReactSession.get('login');
      ReactSession.get('isActive');
      ReactSession.get('pseudo');
    } catch (e) {
      
    ReactSession.set('login', '');
    ReactSession.set('pseudo', '');
    ReactSession.set('isActive', false);
    }

    this.state = {
      isLoggedIn: false,
      pseudo: '',
    };

    
  }

  makeAPICall() {
    try {
      const axios = require('axios').default;
      axios.get('http://localhost:5000/api')
      .then(res => {
        console.log(res)
      });

    }
    catch (e) {
      console.log(e)
    }
  }

  componentDidMount(){
    ReactSession.setStoreType("localStorage");

    this.setState({ 
      isLoggedIn: ReactSession.get('isActive'),
      pseudo: ReactSession.get('pseudo')
    })
    
    UserProfile.setPseudo(ReactSession.get('login'));
    UserProfile.setIsActive(ReactSession.get('isActive'));

    //this.makeAPICall();
  }

    login = () => {
      this.setState({ isLoggedIn: true, pseudo: UserProfile.getPseudo(), });
    };
  
    logout = () => {
      UserProfile.reset();
      this.setState({ isLoggedIn: false });
    };

  render(){
  return <>
    <Navigation isLoggedIn={this.state.isLoggedIn} logout={this.logout.bind(this)} pseudo={this.state.pseudo}/>

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
