import React from 'react';
import { Component } from 'react';
import UserProfile from '../UserProfile';
import Navigation from '../Navigation.js';
import { useNavigate } from "react-router-dom";
import { Route, Redirect, Navigate } from 'react-router';

// import Cookies from 'universal-cookie';

class Field extends Component {
    render() {
        const {name, value, onChange, children, type} = this.props
        return <div className='form-group mt-3'>
            <label htmlFor={name}>{children}</label>
            <input type={type} value={value} onChange={onChange} id={name} name={name} className='form-control'/>
        </div>
    }
}

export class LoginPage extends Component {

    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    
    handleChange (e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        const data = JSON.stringify(this.state)
        //console.log(data)

        fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'  },
            body: data
        }).then(response => response)
        .then(response => {
            //console.log("resp : ", response);
        })
        .catch(err => {
            console.log(err);
        });

        UserProfile.createSession('', this.state.email, this.state.email);
              
        this.props.login();
    }

    render() {
        return <div className='container border border-primary rounded mt-5 p-3 App bg-light'>
            <form onSubmit={this.handleSubmit}>
            <h1>Se connecter</h1>
            <Field name="email" value={this.state.email} onChange={this.handleChange} type='text'>email</Field>
            <Field name="password" value={this.state.password} onChange={this.handleChange} type='password'>Password</Field>
            
            <div className='form-group mt-3'>
                <button className='btn btn-primary'>Se connecter</button>
            </div>
            </form>
        </div>
    }
}