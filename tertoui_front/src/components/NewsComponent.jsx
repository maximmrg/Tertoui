import React from 'react';
import {Component} from 'react';

export class News extends Component {
    render(){
        const {title, author, children, date} = this.props
        return <div className='form-group border mt-3 bg-light rounded p-2'>
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