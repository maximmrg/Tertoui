import React from 'react';
import { Component } from 'react';
import UserProfile from '../UserProfile';
import Navigation from '../Navigation.js';
import { useLocation, useNavigate } from "react-router-dom";
import { Route, Redirect, Navigate } from 'react-router';

// import Cookies from 'universal-cookie';

class Field extends Component {
    render() {
        const { name, value, onChange, children, type } = this.props
        return <div className='form-group mt-3'>
            <label htmlFor={name}>{children}</label>
            <input type={type} value={value} onChange={onChange} id={name} name={name} className='form-control' />
        </div>
    }
}



export class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            messageErreur: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    redirectAfterLogin = () => {
        const navigate = useNavigate();
        const location = useLocation();

        navigate(location.state.from);
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify(this.state)
        //console.log(data)

        fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: data
        }).then(response => response)
            .then(response => {
                //console.log("resp : ", response);
                var statusResp = response.status;

                if (statusResp == 200) {
                    UserProfile.createSession('', this.state.email, this.state.email);
                    this.props.login();

                    //this.redirectAfterLogin();
                } else {
                    this.setState({
                        messageErreur: 'Wrong Login or Password',
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        return <div className='container border border-primary rounded mt-5 p-3 App bg-light'>
            <form onSubmit={this.handleSubmit}>
                <h1>Se connecter</h1>
                <Field name="email" value={this.state.email} onChange={this.handleChange} type='text'>Email</Field>
                <Field name="password" value={this.state.password} onChange={this.handleChange} type='password'>Password</Field>

                <div className='m-3 text-danger'>
                    <p>{this.state.messageErreur}</p>
                </div>
                <div className='form-group mt-3'>
                    <button className='btn btn-primary'>Se connecter</button>
                </div>
            </form>
        </div>
    }
}