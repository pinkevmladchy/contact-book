import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div>
                <img/>
                <div>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                </div>
                <div>
                    <a href="">fb</a>
                    <a href="">inst</a>
                    <a href="">pint</a>
                </div>
            </div>
        )
    }
}