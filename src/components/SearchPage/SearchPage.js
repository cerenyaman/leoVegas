import React from "react";
import "./style.css";

class SearchPage extends React.Component {
  
  render() {
    const {onChange} = this.props;
    return (
      <div className="searchBar">
          <div className="search-container">
            <input
              onChange={onChange}
              className="searchquery--"
              type="text"
              maxlength="50"
              autocomplete="off"
              placeholder="Search.."
            ></input>
          </div>
      </div>
    );
  }
}
export default SearchPage;
