import React from "react";
import "./style.css";

class SearchPage extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="searchBar">
        <div className="search-container">
          <input
            onChange={onChange}
            className="searchquery--"
            type="text"
            maxLength="50"
            autoComplete="off"
            placeholder="Search.."
          ></input>
        </div>
      </div>
    );
  }
}
export default SearchPage;
