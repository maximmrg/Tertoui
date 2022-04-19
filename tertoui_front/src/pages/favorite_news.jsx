import { Component } from "react";
import { News } from '../components/NewsComponent';
import dateFormat from 'dateformat';
import { ReactSession } from 'react-client-session';


export class Favorite_news extends Component {

    constructor(props){
        super(props);

        this.state = {
            idUser: '',
            news: [],
        };

        this.getFavNews = this.getFavNews.bind(this);
    }

    componentDidMount(){
        ReactSession.setStoreType("localStorage");
        this.state.idUser = "625d721b67a9b34a10e65612";

        this.getFavNews();
    }

    getFavNews(){
        var url = "http://localhost:8080/users/" + this.state.idUser + "/favorites";

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        .then(response => response)
        .then(response => {
            console.log(response);
            // response.map((postData) => {
            //     this.setState({
            //         news: [...this.state.news, postData]
            //     });
            // });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        return <>
            <div className='container App'>
                <h2>Your favorite news</h2>
            {this.state.news.map(item => {
                return(<News id={item.id} title={item.title} author={item.author} date={dateFormat(item.releaseDate, 'dd/mm/yyyy hh:MM')}>{item.content}</News>);
            })}
        </div>
        </>
    }
}