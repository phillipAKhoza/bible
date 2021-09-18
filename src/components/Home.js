import React, { Component } from 'react';
import Bible from './books/api/bible-api';
export class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
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
                </div>
                <div className="books-container">
                    <Bible/>
                </div>
            </div>
          </div>
        );
    }
}


export default Home;
