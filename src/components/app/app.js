import React, { Component } from 'react';
import CardList from '../card-list/card-list'

export default class App extends Component {
    state = {
        data: [{
            id: 1,
            text: 'Dmytro',
            src: 'https://robohash.org/men?set=set4&size=100x100'
        },
        {
            id: 2,
            text: 'Serhii',
            src: 'https://robohash.org/men?set=set4&size=100x100'
        },
        {
            id: 3,
            text: 'Daryna',
            src: 'https://robohash.org/women?set=set4&size=100x100'
        },
        {
            id: 4,
            text: 'Valentyna',
            src: 'https://robohash.org/women?set=set4&size=100x100'
        }
        ]
    };
   
    render() {
        return (
            <CardList data={this.state.data} />
        )
    }
}