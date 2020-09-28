import React, { Component } from 'react';
import Card from '../card/card'

export default class CardList extends Component {
    render() {
        const { data } = this.props;
        const cards = data.map(item => {
            return <Card key={item.id} info={item} />;
        })
        return (
            <>
               {cards} 
            </>
        )
    }
}