import { Component } from "react"

export class FieldComponent extends Component {
    render() {
        const {name, value, onChange, children, type} = this.props
        return <div className='form-group mt-3'>
            <label htmlFor={name}>{children}</label>
            <input type={type} value={value} onChange={onChange} id={name} name={name} className='form-control'/>
        </div>
    }
}