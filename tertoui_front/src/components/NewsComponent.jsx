import React from 'react';
import { Component } from 'react';
import { ReactSession } from 'react-client-session';

export class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    componentDidMount() {
        ReactSession.setStoreType("localStorage");

        this.setState({
            isLoggedIn: ReactSession.get('isActive')
        });
    }

    render() {
        const {id, title, author, children, date } = this.props

        var btnFollow = '';
        var btnFav = '';
        if(this.state.isLoggedIn == true){
            btnFollow = <BtnFollow idUser="1" idAuthor="1"></BtnFollow>
            btnFav = <BtnFavorite idUser="625d721b67a9b34a10e65612" idNew={id}></BtnFavorite>
        }
        return <div className='form-group border mt-3 bg-light rounded p-2'>
            <h3 htmlFor={title}>{title}</h3>
            <div>
                <p>{children}</p>
            </div>
            <div>
                Publié : {date}
            </div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-7'>
                    De : {author}
                </div>
                <div className='col-auto'>
                    {btnFollow}
                </div>
                <div className='col-auto'>
                    {btnFav}
                </div>
            </div>
            <div hidden={true}>{id}</div>
        </div>
    }
}

class BtnFollow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textBtn: 'Follow',
            idUser: this.props.idUser,
            idAuthor: this.props.idAuthor,
        };

        this.followAuthor = this.followAuthor.bind(this);
    }

    componentDidMount() {
        ReactSession.setStoreType("localStorage");
    }

    followAuthor(){
        var url = "http://localhost:8080/users/" + this.state.idUser + "/follow/" + this.props.idAuthor;

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        .then(response => response.data)
        .then(response => {

        })
        .catch(err => {
            console.log(err);
        });
    }


    render() {
        const { children } = this.props
        return <>
            <button onClick={this.followAuthor} className='btn btn-success'>{this.state.textBtn}</button>
        </>
    }
}

class BtnFavorite extends Component {

    constructor(props){
        super(props)

        this.state = {
            textBtn: 'Favorite',
            idUser: this.props.idUser,
            idNew: this.props.idNew
        };

        this.favNew = this.favNew.bind(this);
    }

    favNew(){
        var url = "http://localhost:8080/users/" + this.state.idUser + "/favorites/add/" + this.props.idNew;

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
        .then(response => response.data)
        .then(response => {

        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return <>
            <button className='btn btn-info' onClick={this.favNew}>{this.state.textBtn}</button>
        </>
    }
}