import { Component } from "react";
import { Link } from 'react-router-dom';
import UserProfile from "./UserProfile";

class NavBarLoggedIn extends Component {
    render() {
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={{
                pathname: '/',
            }} className="navbar-brand">Accueil</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/news' className="nav-link">News</Link>
                    </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
            </nav>
            

            </>
        );
    }
}

class NavBarPublic extends Component {
    render() {
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={{
                pathname: '/',
            }} className="navbar-brand">Accueil</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/news' className="nav-link">News</Link>
                    </li>
                
                <li className="nav-item">
                    <Link to={{
                        pathname: '/login',
                    }} className="nav-link">Login</Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
            </nav>
            

            </>
        );
    }
}


class Navigation extends Component {

    constructor() {
        super()

        this.state = {
            loggedIn : false
        }
    }

    render(){
    return <>
            {UserProfile.getIsActive() ? <NavBarLoggedIn/> : <NavBarPublic/>}
        </>
    }
};

export default Navigation;