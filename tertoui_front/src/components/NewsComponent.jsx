import React from 'react';
import { Component } from 'react';
import { ReactSession } from 'react-client-session';
import UserProfile from '../UserProfile';


export class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isFav: false
        };

        this.isFav = this.isFav.bind(this);
    }

    componentDidMount() {
        ReactSession.setStoreType("localStorage");

        this.setState({
            isLoggedIn: ReactSession.get('isActive')
        });
    }

    isFav(idNew) {
        const axios = require('axios').default;

        var res;

        var url = "http://localhost:8080/news/" + idNew + "/favs";

        axios.get(url, {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        })
            .then(response => response.data)
            .then(response => {
                //console.log(response);

                res = response;

                const listFavs = response.map((fav) => {
                    if (fav == ReactSession.get('id')) {                        
                        return false;
                    } else {
                        //console.log("false");
                    }
                }
                );
            })
            .catch(err => {
                console.log(err);
            })

            //console.log(result);
            return res;
    }

    render() {
        const { id, title, author, children, date, authorId } = this.props

        var idUser = UserProfile.getId();
        var btnFollow = '';
        var btnFav = '';
        if (this.state.isLoggedIn == true) {
            var isFav = this.isFav(id);

            console.log(isFav);

            //console.log(isFav);
            if (isFav) {
                btnFollow = <BtnFollow idUser={idUser} idAuthor={authorId}></BtnFollow>
            }

            btnFav = <BtnFavorite idUser={idUser} idNew={id}></BtnFavorite>
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

    followAuthor() {
        var url = "http://localhost:8080/users/" + this.state.idUser + "/follow/" + this.props.idAuthor;

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
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

    constructor(props) {
        super(props)

        this.state = {
            textBtn: 'Favorite',
            idUser: this.props.idUser,
            idNew: this.props.idNew
        };

        this.favNew = this.favNew.bind(this);
    }

    favNew() {
        var url = "http://localhost:8080/users/" + this.state.idUser + "/favorites/add/" + this.props.idNew;

        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
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