import { Component } from "react";
import { News } from '../components/NewsComponent';
import dateFormat from 'dateformat';
import { ReactSession } from 'react-client-session';
import UserProfile from '../UserProfile';


export class Favorite_news extends Component {

    constructor(props) {
        super(props);

        ReactSession.setStoreType("localStorage");

        this.state = {
            idUser: ReactSession.get('id'),
            news: [],
        };

        this.getFavNews = this.getFavNews.bind(this);
        this.getNew = this.getNew.bind(this);
    }

    componentDidMount() {
        ReactSession.setStoreType("localStorage");
        this.setState({
            idUser: ReactSession.get('id'),
        });
        this.getFavNews();
    }

    getFavNews() {
        var url = "http://localhost:8080/users/" + this.state.idUser + "/favorites";

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                //console.log(jsonData)

                const idNews = jsonData.map((id) =>
                    this.getNew(id)
                );
            })
            .catch(err => {
                console.log(err);
            });
    }

    getNew(id) {
        var url = "http://localhost:8080/news/" + id;

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                
                this.setState({
                    news: [...this.state.news, jsonData]
                });
                
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <>
            <div className='container App mt-3'>
                <h2>Your favorite news</h2>
                {this.state.news.map(item => {
                    return (<News id={item.id} title={item.title} author={item.author} date={dateFormat(item.releaseDate, 'dd/mm/yyyy hh:MM')}>{item.content}</News>);
                })}
            </div>
        </>
    }
}