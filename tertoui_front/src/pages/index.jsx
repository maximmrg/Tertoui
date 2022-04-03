import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';


export class Index extends Component {
    render() {
       return <div className="App">
            <h1>Tertoui</h1>

            <h3>LE site d'actualité</h3>
            <Link to='/login'>Se connecter</Link>
            <br />
            <Link to='/news_form'>Créer une news</Link>
        </div>
    }
};

export default Index;