import React from 'react';
import { Component } from 'react';
import UserProfile from '../UserProfile'


class Field extends Component {

    render() {
        const { name, value, onChange, children } = this.props
        return <div className="form-group mt-3">
            <label htmlFor={name}>{children}</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
        </div>
    }
}

class TextAreaField extends Component {
    render() {
        const { name, value, onChange, children } = this.props
        return <div className="form-group mt-3">
            <label htmlFor={name}>{children}</label>
            <textarea type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
        </div>
    }
}

export class NewsForm extends Component {



    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            author: UserProfile.getPseudo(),
            themes: [],
            subject: '',
            authorId: UserProfile.getId(),
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectThemeChange = this.handleSelectThemeChange.bind(this)
        this.getThemes = this.getThemes.bind(this)
    }

    componentDidMount() {
        this.getThemes();
    }

    getThemes() {
        const axios = require('axios').default;

        axios.get("http://localhost:8080/subjects", {
            headers: {
                'Access-Control-Allow-Origin' : 'Allow'
            }
        })
            .then(response => response.data)
            .then(response => {
                //console.log("resp : ", response)

                response.map((postData) => {
                    var obj = {'id': postData.id, 'name': postData.subject};
                    this.setState({
                        themes: [...this.state.themes, obj]
                    });
                })              
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value,
            subject: e.target.value
        })
    }

    handleSelectThemeChange(e) {
        this.setState({
            subject: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify(this.state)
        //console.log(data)

        fetch("http://localhost:8080/news", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            body: data
        })
        .then(response => response.data)
        .then(response => {
            //console.log("resp : ", response);
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {

        return <div className='container App bg-light mt-3 border rounded p-3 border-info'>
            <form onSubmit={this.handleSubmit}>
                <h1>Votre article</h1>
                <Field name="title" value={this.state.title} onChange={this.handleChange}>Titre</Field>

                <TextAreaField name="content" value={this.state.content} onChange={this.handleChange}>Article</TextAreaField>

                <div className='row m-3'>
                    <div className='col-1 mt-2'>
                        Sujet :
                    </div>
                    <div className='col-3'>
                        <select className='form-select' name={this.state.subject} id={this.state.subject} onChange={this.handleSelectThemeChange}>{
                            this.state.themes?.map((item, i) =>
                                <option key={item.id} value={item.id}>{item.name}</option>)
                        }
                        </select>
                    </div>
                </div>
                <div className='form-group mt-3'>
                    <button className='btn btn-primary'>Publier</button>
                </div>
            </form>
        </div>
    }
}