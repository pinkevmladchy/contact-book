import React, { Component } from 'react';
import CardList from '../card-list/card-list'
import AddForm from '../add-form/add-form'
import SearchForm from '../search-form/search-form'

export default class App extends Component {
    rand = 1000;
    state = {
        data: [{
            id: 1,
            name: 'Dmytro',
            email: 'Dmytro@gmail.com',
            phone: '0954165091',
            src: 'https://robohash.org/boy?set=set4&size=100x100'
        },
        {
            id: 2,
            name: 'Serhii',
            email: 'Serhii@gmail.com',
            phone: '0954345091',
            src: 'https://robohash.org/boy?set=set4&size=100x100'
        },
        {
            id: 3,
            name: 'Daryna',
            email: 'Daryna@gmail.com',
            phone: '0954161731',
            src: 'https://robohash.org/girl?set=set4&size=100x100'
        },
        {
            id: 4,
            name: 'Valentyna',
            email: 'Valentyna@gmail.com',
            phone: '0954462191',
            src: 'https://robohash.org/girl?set=set4&size=100x100'
        }
        ],
        search:[

        ]
    };

    deleteItem = (id) => {
        let { data } = this.state;
        let index = data.findIndex(x => x.id === id);
        console.log(index);

        let dataBefore = data.slice(0, index);
        let dataAfter = data.slice(index + 1);

        this.setState((state) => { return { data: [...dataBefore, ...dataAfter] }; });
    }

    addItem = (name, email, phone) => {
        let { data } = this.state;
        this.setState(({ data }) => {
            const newItem = {
                id: this.rand++,
                name: name,
                email: email,
                phone: phone,
                src: `https://robohash.org/${name}?set=set4&size=100x100`
            }
            return { data: [...data, newItem] }
        })
    }

    searchItem = (name_card) => {
        let { data } = this.state;
        this.setState(({ data }) => {
            const array = data.filter(x=>x.includes(name_card));
            return {search: [...array]}
        })
    }

    render() {
        return (
            <>
                <div className="d-flex row justify-content-around">
                    <CardList data={this.state.search}
                        onDblDelete={(id) => this.deleteItem(id)}
                        onAdd={this.addItem} />
                </div>
                <AddForm onAdd={this.addItem} />
                <div className="container">
                    <SearchForm search={this.searchItem}/>
                </div>
            </>
        )
    }
}