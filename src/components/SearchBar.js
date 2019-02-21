import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="header-search">
        <form className="search-form" onSubmit={this.onFormSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search Movies"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button className="search-button">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
