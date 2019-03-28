import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { filterTools } from "../actions/";

const SearchBar = props => (
  <div className="search-bar">
    <input
      type="search"
      className="form-control"
      placeholder="Mot-clé pour filtrer les applications"
      onChange={event => props.filterTools(event.target.value)}
    />
  </div>
);

SearchBar.propTypes = {
  filterTools: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterTools }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
