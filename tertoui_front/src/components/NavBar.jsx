import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import Auth from "../contexts/Auth";
import { logout } from "../services/AuthAPI";

const NavBar = () => {
    const { auth, setAuth } = useContext(Auth);

    const handleLogout = () => {
        logout();
        setAuth(false);
        console.log('on est déconnecté');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news">News</NavLink>
                        </li>
                        {(!auth && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                            </>
                        )) || (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/create_news">Create</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/account">Account</NavLink>
                                    </li>
                                </>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;