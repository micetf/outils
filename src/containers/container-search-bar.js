import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { filterTools } from '../actions/';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-bar">
        <input
          autoFocus
          type="search"
          className="form-control"
          placeholder='Mot-clé pour filtrer les applications'
          onChange={event => this.props.filterTools(event.target.value)} />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ filterTools: filterTools }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
