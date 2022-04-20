import { Component } from "react";
import { FieldComponent } from "../components/FieldComponent";

export class CreateAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            message: '',
            messageError: '',
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

        if ((this.state.username !== "") && (this.state.email !== "") && (this.state.password !== "")) {

            const dataJSON = JSON.stringify(this.state)
            //console.log(dataJSON)

            fetch("http://localhost:8080/users", {
                method: "POST",
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
                body: dataJSON
            }).then(response => response)
                .then(response => {
                    var statusResp = response.status;

                    if (statusResp == 201) {
                        this.setState({
                            message: 'Account created !',
                            messageError: '',
                        });
                    } else {
                        this.setState({
                            message: '',
                            messageError: 'Error while creating your account',
                        });
                    }
                    //console.log("resp : ", response);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    render() {
        return <div className="container border rounder mt-5 p-3 bg-light App">
            <form onSubmit={this.handleSubmit}>
                <h1>Create account</h1>
                <FieldComponent name='username' value={this.state.username} onChange={this.handleChange}>Username</FieldComponent>
                <FieldComponent name='email' value={this.state.email} onChange={this.handleChange}>Email</FieldComponent>
                <FieldComponent type='password' name='password' value={this.state.password} onChange={this.handleChange}>Password</FieldComponent>

                <div className="m-3 text-success">
                    <p>{this.state.message}</p>
                </div>
                <div className="m-3 text-danger">
                    <p>{this.state.messageError}</p>
                </div>
                <div className="form-group mt-3">
                    <button className="btn btn-success">Create account</button>
                </div>
            </form>
        </div>
    }
}