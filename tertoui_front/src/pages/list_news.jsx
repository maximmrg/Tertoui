import React from 'react';
import {Component} from 'react';


class Article extends Component {
    render(){
        const {title, author, children, date} = this.props
        return <div className='form-group border mt-3'>
            <h3 htmlFor={title}>{title}</h3>
            <div>
                <p>{children}</p>
            </div>
            <div>
                De : {author}
                <br/>
                Publié : {date}
            </div>
        </div>
    }
}



export class ListNews extends Component {
    constructor (props) {
        super(props)

        this.state = {
            date: ''
        }
    }

    componentDidMount() {
        this.getDate();
      }
    
    getDate = () => {
        this.setState({ date : new Date().toLocaleString() });
      };

    render () {
        return <div className='container App'>
            <Article title="Article 1" author="Paul" date={this.state.date}>
                Ceci est l'article n°1
            </Article>

            <Article title="Covid" author="Jean" date={this.state.date}>
                Les chiffres du Covid contineunt d'augmenter
            </Article>

            <Article title="Ukraine" author="Alex" date={this.state.date}>
                La guerre en ukraine fait rage
            </Article>
        </div>
    }
}