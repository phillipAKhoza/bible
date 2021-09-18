import React, { Component } from 'react';
// import data from './books.json';
import books from './Bible-books.json';

export class Bible extends Component {
 

    // if(test === "New Testament"){       
    //   for(i =0; i < new_test[place]; i++){
    //     capts[i] = i + 1;
    //   }
        
    // }else if( test === "Old Testament"){
    //   for(i =0; i < old_test[place]; i++){
    //     capts[i] = i + 1;
    //   } 
    // }

    // var books = require('./books.json');
    // const new_Test_Books = books.The_New_Testament;
    // const old_Test_Books = books.The_Old_Testament;
    // const new_Testament = new_Test_Books.split(",");
    // const old_Testament = old_Test_Books.split(",");
    // const DATA = [
    //   {
    //     title: "Old Testament",
    //     data: old_Testament,
    //   },
    //   {
    //     title: "New Testament",
    //     data: new_Testament,
    //   },
    // ];

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