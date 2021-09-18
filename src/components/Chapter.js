import React, { Component } from 'react';
import chapters from './books/api/chapters.json';
import Header from './layout/Header';

export default class Chapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        place: this.props.location.chapterProps.place,
        book: this.props.location.chapterProps.book,
        };
        // console.log(this.state.place);
        console.log(this.state.book+" has "+chapters[this.state.place]+" chapters");
    }
    render() {
        return (       
          <div className="site-main">
            <div className="pk-container">
                <div className="header-container">
                    <Header/>
                </div>
                <div className="chapter-container">
                    
                </div>
            </div>
          </div>
        );
    }
}


