import React from 'react';

class SearchBar extends React.Component {
  state = {
    typedSearch: '',
  };

  // Updating the state based on the input search value (at every change)
  handleSearch = (event) => {
    this.setState({ typedSearch: event.target.value });
  };

  // Calling this method to update when the user types, before the render method
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.typedSearch !== this.state.typedSearch) {
      this.props.filterBeer(this.state.typedSearch);
    }
  };

  render() {
    console.log(this.state.typedSearch);
    return (
      <div className="d-flex justify-content-center my-3">
        <label>Filter beer:</label>
        <input
          type="text"
          className="input search-bar ms-2"
          onChange={this.handleSearch}
          value={this.state.typedSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
