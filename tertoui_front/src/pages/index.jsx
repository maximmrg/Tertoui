import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Component } from 'react';
import NewsCarousel from '../components/NewsCarousel';

export class Index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            test : ''
        }
    }

    testApi() {
        fetch("https://baconipsum.com/api/?type=meat-and-filler", {
            "method": "GET",
            "headers": {
                
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    test: response
                })                
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div className="App">
            <h1>Tertoui</h1>

            <h3>LE site d'actualité</h3>

            <button className='btn btn-warning' onClick={this.testApi.bind(this)}>Test API</button>
            <br/>
            <Link to='/login'>Se connecter</Link>
            <br />
            <Link to='/logon'>Créer compte</Link>
            <br />
            <Link to='/news_form'>Créer une news</Link>
            <br />
            <Link to='/news'>News</Link>
            <NewsCarousel />
        </div>
    }
};

export default Index;