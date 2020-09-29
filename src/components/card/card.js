import React, { Component } from 'react';
import './card.css'

export default class Card extends Component {
    state = {
        selected: false,
    }

    onClickEvent = () => {
        this.setState((state) => {
            return { selected: !this.state.selected };
        });
    }

    render() {
        const { info, onDblDelete } = this.props;
        let className = 'card p-4 custom-card col-12 col-sm-6 col-md-4 col-lg-2';
        if (this.state.selected) {
            className += ' selected';
        }

        return (
            <div onClick={this.onClickEvent} className={className}>
                     <img src={info.src} />
                <div>
                    <p>{info.name}</p>
                    <p>{info.email}</p>
                    <p>{info.phone}</p>
                </div>
                <a className="d-flex btn btn-info butDel" onClick={onDblDelete}>x</a>
                <div>
                    <a href="fb.com"><i class="fab fa-facebook"></i></a>
                    <a href="instagram.com"><i class="fab fa-instagram"></i></a>
                    <a href="vk.com.com"><i class="fab fa-vk"></i></a>
                </div>
            </div>
        )
    }
}