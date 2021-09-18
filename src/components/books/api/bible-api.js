import React, { Component } from 'react';
// import data from './books.json';
import books from './Bible-books.json';

export function Welcome(props) {

  return <h1>Hello, {props.name}</h1>;
}

export class Bible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      book:''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  updateState(event){
      this.setState({ search: event.target.value.substr(0,20) });
    }
    handleClick(event, index) {
      this.setState({ book: event });
    console.log(event+" is clicked and is in index "+index);
    <Welcome name="Phillip"/>
  }
  
    render() {
        return (       
          <div className="site-main">
            <form className="search">
                        {/* <button type="submit"><i className="fa fa-search"></i></button> */}
              <input type="text" placeholder="Search..." value={this.state.search} onChange={this.updateState.bind(this)}></input>
            </form>
              { 
                books.filter((item) =>
                {
                  if(this.state.search === '' ){
                  return (item);
                }
                else 
                if(item.toLowerCase().includes(this.state.search.toLowerCase())){
                  return item;
                }
                return false;
                }
                
              ).map(((item,index) => {
                return(
                <div key={index} className="post" onClick={()=> {
                  this.handleClick(item, index)
                  
                  }}>
                  <h3>{item}</h3>
                  {/* <p>{item.body}</p> */}
                </div>
              )}
              ))
            }
          </div>
        )
    }
}


export default Bible;