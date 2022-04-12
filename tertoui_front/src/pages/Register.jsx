import { Component } from "react";
import { FieldComponent } from "../components/FieldComponent";

export class CreateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            login: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify(this.state)
        console.log(data)
    }

    render() {
        return <div className="container border rounder mt-5 p-3 bg-light App">
            <form onSubmit={this.handleSubmit}>
                <h1>Create account</h1>
                <FieldComponent name='pseudo' value={this.state.pseudo} onChange={this.handleChange}>Pseudo</FieldComponent>
                <FieldComponent name='Login' value={this.state.login} onChange={this.handleChange}>Login</FieldComponent>
                <FieldComponent type='password' name='password' value={this.state.password} onChange={this.handleChange}>Password</FieldComponent>

                <div className="form-group mt-3">
                    <button className="btn btn-success">Create account</button>
                </div>
            </form>
        </div>
    }
}