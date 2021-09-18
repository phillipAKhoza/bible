import React, { Component } from 'react';
// import data from './books.json';
import books from './Bible-books.json';

export class Bible extends Component {
 
    render() {
        return (       
          <div className="site-main">
            {books.map(((item,index) => (
              <div key={index} className="post">
                <h3>{item}</h3>
                {/* <p>{item.body}</p> */}
              </div>
            )))}
          </div>
        )
    }
}


export default Bible;