import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import { ReactSession } from 'react-client-session';
import UserProfile from '../UserProfile';

function NewsChild({ items }) {
    const [btnFollow, setBtnFollow] = useState();
    const [btnFav, setBtnFav] = useState();

    useEffect(() => {
    function setButtons() {
        ReactSession.setStoreType("localStorage");

        if (items.isFav === true) {
            setBtnFav(<BtnUnFavorite idUser={ReactSession.get('id')} idNew={items.id} />)
        } else {
        }
    }

    setButtons();

}, [])

    return ( 
        <>
            <div className='form-group border mt-3 bg-light rounded p-2'>
                <h3 htmlFor={items.title}>{items.title}</h3>
                <div>
                    <p>{items.children}</p>
                </div>
                <div>
                    Publié : {items.date}
                </div>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-7'>
                        De : {items.author}
                    </div>
                    <div className='col-auto'>
                        {items.btnFollow}
                    </div>
                    <div className='col-auto'>
                        {items.btnFav}
                    </div>
                </div>
                <div hidden={true}>{items.id}</div>
            </div>
            {console.log("hi", items)}
        </>
    )
}

export function News(props) {

    const [isLoading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [isFav, setIsFav] = useState();
    const [idNew, setIdNew] = useState();
    const [btnFav, setBtnFav] = useState(null);
    
    const [items, setItems] = useState();

    useEffect(() => {

        var sendItems = JSON.parse(JSON.stringify(props));;

        async function isFavFct(idNew) {
            ReactSession.setStoreType("localStorage");

            var url = "http://localhost:8080/news/" + idNew + "/favs";

            await fetch(url, {
                method: "GET",
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            })
                .then(response => response.json())
                .then(response => {
                    //console.log(response);

                    response.map((fav) => {

                        if (fav === ReactSession.get('id')) {
                            setIsFav(true);
                        }
                    }
                    );

                    setButtons();
                    setLoading(false);
                });

        }

        function setButtons() {
            if (isFav === true) {
                sendItems['isFav'] = true;
                setBtnFav(<BtnUnFavorite idUser={ReactSession.get('id')} idNew={items.id} />)

                sendItems['btnFav'] = btnFav;
            } else {
                sendItems['isFav'] = false;
            }

            if(isFav != '')
            setItems(sendItems);
        }

        isFavFct(props.id);

    }, []);

    if(isLoading){
        return <div className='App'>Loading...</div>
    }

    return (
        // {
        // const { id, title, author, children, date, authorId } = this.props

        // var idUser = UserProfile.getId();
        // var btnFollow = '';
        // var btnFav = '';
        // if (this.state.isLoggedIn === true) {
        //     if (this.state.isFav) {
        //         btnFollow = <BtnFollow idUser={idUser} idAuthor={authorId}></BtnFollow>
        //     } else {
        //         btnFollow = <BtnUnFollow idUser={idUser} idAuthor={authorId}></BtnUnFollow>
        //     }

        //     btnFav = <BtnFavorite idUser={idUser} idNew={id}></BtnFavorite>
        // }}
        <>
        <div>
            {items && <NewsChild items={items}/>}
        </div>
        </>
    )
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

class BtnUnFollow extends Component {

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
            method: "DELETE",
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

class BtnUnFavorite extends Component {

    constructor(props) {
        super(props)

        this.state = {
            textBtn: 'UnFavorite',
            idUser: this.props.idUser,
            idNew: this.props.idNew
        };

        this.unFavNew = this.unFavNew.bind(this);
    }

    unFavNew() {
        var url = "http://localhost:8080/users/" + this.state.idUser + "/favorites/" + this.props.idNew;

        fetch(url, {
            method: "DELETE",
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
            <button className='btn btn-info' onClick={this.unFavNew}>{this.state.textBtn}</button>
        </>
    }
}