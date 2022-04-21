import React, { Component, ReactFragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel_bg from '../assets/grey-gradient-background.jpg';

export class NewsCarousel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            news: []
        }
    }

    componentDidMount() {
        this.getNews();
    }

    getNews() {
        const axios = require('axios').default;

        axios.get("http://localhost:8080/news", {
            headers: {
                'Access-Control-Allow-Origin': 'Allow'
            },
            params: {
                _limit: 10
            },
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
        return <>
            <div style={{ display: 'block', padding: 30 }}>
                <Carousel>
                    {this.state.news.map(item => {
                        return (
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src={carousel_bg}
                                    alt={item.title}
                                    height="250"
                                    variant="dark"
                                />
                                <Carousel.Caption>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        </>
    }
}
