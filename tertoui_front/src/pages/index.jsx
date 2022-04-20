import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Component } from 'react';
import { NewsCarousel } from '../components/NewsCarousel';
import bird from '../assets/bird.jpg';

export class Index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            test: ''
        }
    }

    render() {
        return <div className="Container App mt-3">

            <img src={bird} width="75" />
            <h1>Tertoui</h1>

            <h3>LE site d'actualité</h3>
            <NewsCarousel />
        </div>
    }
};

export default Index;