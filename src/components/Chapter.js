import React, { Component } from 'react';
import chapters from './books/api/chapters.json';
import Header from './layout/Header';

export default class Chapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        place: this.props.location.chapterProps.place,
        book: this.props.location.chapterProps.book,
        book_chapters:[],
        };
        // console.log(this.state.place);
        console.log(this.state.book+" has "+chapters[this.state.place]+" chapters");
        for(let i = 0; i< chapters[this.state.place]; i++){
            // this.setState({
            this.state.book_chapters[i]= i +1;
            // });
        }
    }
    
    render() {
        
        return (       
          <div className="site-main">
            <div className="pk-container">
                <div className="header-container">
                    <Header/>
                </div>
                <div className="chapter-container">
                    { 
                        this.state.book_chapters.map(((item,index) => {
                        return(
                        <div key={index} className="chapters" onClick={()=> {
                            this.handleClick(item, index)   
                        }}>
                            <h3>{item}</h3>
                        </div>
                    )}))
                    }
                </div>
            </div>
          </div>
        );
    }
}


