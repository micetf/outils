import React from "react";
import { connect } from "react-redux";

import { filterTools } from "../../actions/";

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

export default connect(
    null,
    { filterTools }
)(SearchBar);
