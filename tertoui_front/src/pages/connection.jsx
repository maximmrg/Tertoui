import React from 'react';
import { Component } from 'react';

class Field extends Component {
    render() {
        const {name, value, onChange, children, type} = this.props
        return <div className='form-group'>
            <label htmlFor={name}>{children}</label>
            <input type={type} value={value} onChange={onChange} id={name} name={name} className='form-control'/>
        </div>
    }
}

export class LoginPage extends Component {

    constructor (props) {
        super(props)
        this.state = {
            login: '',
            password: ''
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
        console.log(data)
    }

    render() {
        return <div className='container border border-primary rounded mt-5 p-3'>
            <form onSubmit={this.handleSubmit}>
            <h1>Se connecter</h1>
            <Field name="login" value={this.state.login} onChange={this.handleChange} type='text'>Login</Field>
            <Field name="password" value={this.state.password} onChange={this.handleChange} type='password'>Password</Field>
            
            <div className='form-group'>
                <button className='btn btn-primary'>Se connecter</button>
            </div>
            </form>
        </div>
    }
}