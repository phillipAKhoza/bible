import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (   
            <div className="row">
                <div className="col-4 header-tabs">BOOKS</div>
                <div className="col-4 header-tabs">CHAPTERS</div>
                <div className="col-4 header-tabs">VERSES</div>
            </div>
        )
    }
}