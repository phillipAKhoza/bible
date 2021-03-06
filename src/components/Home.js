import React, { Component } from 'react';
import Bible from './books/api/bible-api';
import Header from './layout/Header'
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
                    <Header/>
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
