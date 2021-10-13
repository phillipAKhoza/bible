import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (   
            <div className="row">
                <a className="col-4 header-tabs tabs" href={process.env.PUBLIC_URL + '/'}>
                    <div>BOOKS</div>
                </a>
                <a className="col-4 header-tabs tabs" href={process.env.PUBLIC_URL + '/'}>
                    <div>CHAPTERS</div>
                </a>
                <a className="col-4 header-tabs tabs" href={process.env.PUBLIC_URL + '/'}>
                    <div >VERSES</div>
                </a>
            </div>
        )
    }
}