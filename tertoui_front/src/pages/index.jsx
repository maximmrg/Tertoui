import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Component } from 'react';
import NewsCarousel from '../components/NewsCarousel';

export class Index extends Component {

    render() {
       return <div className="App">
            <h1>Tertoui</h1>

            <h3>LE site d'actualité</h3>
            <Link to='/login'>Se connecter</Link>
            <br />
            <Link to='/logon'>Créer compte</Link>
            <br />
            <Link to='/news_form'>Créer une news</Link>
            <br/>
            <Link to='/news'>News</Link>
            <NewsCarousel/>
        </div> 
    }
};

export default Index;