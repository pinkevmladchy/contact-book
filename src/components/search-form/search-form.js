import React, { Component } from 'react'
import './search-form.css'
export default class SearchForm extends Component {

    state = {
        name: ''
    }

    onSearch = (e) => {
        e.preventDefault();
        this.props.searchItem(e.target.value)
        this.setState({ name: '' });
    }

    onTextChanged = (e) => {
        console.log(e.target.value )
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <>
                <form>
                    <input onChange={this.onTextChanged}
                        value={this.state.name}
                        className="form-control" placeholder="Enter contact name" />
                </form>
            </>)
    }
}