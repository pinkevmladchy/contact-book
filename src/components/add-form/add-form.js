import React, { Component } from 'react'
import './add-form.css'
export default class AddForm extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    onAdd = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.email,this.state.phone)
        this.setState((state)=>{return { name: '', email:'', phone:''}});
    }

    onTextChanged4Name = (e) => {
        this.setState({ name: e.target.value });
    }

    onTextChanged4Email = (e) => {
        this.setState({ email: e.target.value });
    }

    onTextChanged4Phone = (e) => {
        this.setState({ phone: e.target.value });
    }

    render() {
        return (
            <>
                <form>
                    <input onChange={this.onTextChanged4Name}
                        value={this.state.name}
                        className="form-control" placeholder="Enter contact name" />
                    <input onChange={this.onTextChanged4Email}
                        value={this.state.email}
                        className="form-control" placeholder="Enter contact email" />
                    <input onChange={this.onTextChanged4Phone}
                        value={this.state.phone}
                        className="form-control" placeholder="Enter contact phone" />
                    <button className="btn btn-primary" onClick={this.onAdd}>Add</button>
                </form>
            </>)
    }
}