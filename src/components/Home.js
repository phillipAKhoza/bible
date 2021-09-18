import React, { Component } from 'react';
import Bible from './books/api/bible-api';
export class Home extends Component {
    render() {
        return (       
          <div className="site-main">
            <div className="pk-container">
                <div className="header-container">
                    <div className="row">
                        <div className="col-4 header-tabs">BOOKS</div>
                        <div className="col-4 header-tabs">CHAPTERS</div>
                        <div className="col-4 header-tabs">VERSES</div>
                    </div>
                    <form className="search">
                        {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                        <input type="text" placeholder="Search.." name="search"></input>
                    </form>
                </div>
                <div className="books-container">
                    <Bible/>
                </div>
            </div>
          </div>
        )
    }
}


export default Home;
