import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
export class Home extends Component {
    render() {
        return (       
          <div className="site-main">
            <div className="pk-container">
                <div className="row">
                    <div className="col-4 header-tabs">col-4</div>
                    <div className="col-4 header-tabs">col-4</div>
                    <div className="col-4 header-tabs">col-4</div>
                </div>
                <form className="search">
                    {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                    <input type="text" placeholder="Search.." name="search"></input>
                </form>
            </div>
          </div>
        )
    }
}


export default Home;
