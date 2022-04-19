import React from 'react';
import { Component } from 'react';
import { News } from '../components/NewsComponent';
import UserProfile from '../UserProfile';
import dateFormat from 'dateformat';

export class ListNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            news: []
        }
    }

    componentDidMount() {
        this.getDate();
        this.getNews();
    }

    getDate = () => {
        this.setState({ date: new Date().toLocaleString() });
    };

    getNews(){
        const axios = require('axios').default;

        axios.get("http://localhost:8080/news", {
            headers: {
                'Access-Control-Allow-Origin' : 'Allow'
            }
        })
        .then(response => response.data)
        .then(response => {
            response.map((postData) => {
                this.setState({
                    news: [...this.state.news, postData]
                });
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return <div className='container App'>
            {this.state.news.map(item => {
                return(<News id={item.id} title={item.title} author={item.author} date={dateFormat(item.releaseDate, 'dd/mm/yyyy hh:MM')}>{item.content}</News>);
            })}
        </div>
    }
}