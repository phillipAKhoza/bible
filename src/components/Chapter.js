import React, { Component } from 'react';
import chapters from './books/api/chapters.json';
import Header from './layout/Header';

export default class Chapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        place: -1,
        book: undefined,
        book_chapters:[],
        hasPassedValues: true,
        };
        try{

        this.state.place= this.props.location.chapterProps.place;
        this.state.book= this.props.location.chapterProps.book;
        console.log(this.state.place);
        console.log(this.state.book+" has "+chapters[this.state.place]+" chapters");
        if(this.state.place !== -1){
            for(let i = 0; i< chapters[this.state.place]; i++){
                // this.setState({
                this.state.book_chapters[i]= i +1;
                // });
            }
        }else{
            this.state.hasPassedValues = false;
            for(let i = 0; i< chapters[0]; i++){
                // this.setState({
                this.state.book_chapters[i]= i +1;
                // });
            }
            console.log(this.state.place);
            console.log(this.state.book+" has "+chapters[this.state.place]+" chapters");
        }
        }catch(e){
            // console.log(e);
        }
    }
    withChapter(){
        this.setState({ 
             place: this.props.location.chapterProps.place,
             book: this.props.location.chapterProps.book,
          });
          const book_chapter =[];
          for(let i = 0; i< chapters[this.state.place]; i++){
                // this.setState({
                book_chapter[i]= i +1;
                // });
            } 
        this.setState({ 
             book_chapters: book_chapter,
          });   
    }
    withoutChapters(){
        
         this.setState({ 
             place: 0,
             book: "Genesis",
          });
          const book_chapter =[];
          for(let i = 0; i< chapters[this.state.place]; i++){
                // this.setState({
                book_chapter[i]= i +1;
                // });
            } 
        this.setState({ 
             book_chapters: book_chapter,
          });   
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
                        this.state.hasPassedValues?
                            this.state.book_chapters.map(((item,index) => {
                            return(
                            <div key={index} className="chapters" onClick={()=> {
                                this.handleClick(item, index)   
                            }}>
                                <h3>{item}</h3>
                            </div>
                            )}))
                        :
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


