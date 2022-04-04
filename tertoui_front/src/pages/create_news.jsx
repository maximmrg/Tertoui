import React from 'react';
import { Component } from 'react';
import UserProfile from '../UserProfile'


class Field extends Component {

    render () {
        const {name, value, onChange} = this.props
        return <div className="form-group">
            <label htmlFor={name}>Titre</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        </div>
    }
}

class TextAreaField extends Component {
    render () {
        const {name, value, onChange, children} = this.props
        return <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <textarea type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        </div>
    }
}

export class NewsForm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            titre: '',
            article: '',
            author: UserProfile.getPseudo(),
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange (e) {
        console.log(e)
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

    render () {
        return <div className='container App'>
            <form onSubmit={this.handleSubmit}>
            <h1>Votre Actualité</h1>
            <Field name="titre" value={this.state.titre} onChange={this.handleChange}>Titre</Field>
            <TextAreaField name="article" value={this.state.article} onChange={this.handleChange}>Article</TextAreaField>
            <div className='form-group'>
                <button className='btn btn-primary'>Publier</button>
            </div>
            </form>
        </div>
    }
}