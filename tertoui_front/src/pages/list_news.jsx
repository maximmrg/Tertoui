import React from 'react';
import {Component} from 'react';
import { News } from '../components/NewsComponent';
import UserProfile from '../UserProfile';


export class ListNews extends Component {
    constructor (props) {
        super(props)

        this.state = {
            date: ''
        }
    }

    componentDidMount() {
        this.getDate();
      }
    
    getDate = () => {
        this.setState({ date : new Date().toLocaleString() });
      };

    render () {
        return <div className='container App'>
            <News title="Article 1" author="Paul" date={this.state.date}>
                Ceci est l'article n°1
                {UserProfile.getIsActive() ? "hey" : "gow"}
            </News>

            <News title="Covid" author="Jean" date={this.state.date}>
                Les chiffres du Covid contineunt d'augmenter
            </News>

            <News title="Ukraine" author="Alex" date={this.state.date}>
                La guerre en ukraine fait rage
            </News>
        </div>
    }
}