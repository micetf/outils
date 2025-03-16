// src/components/Sidebar/Searchbar.js
import React from "react";
import { connect } from "react-redux";
import { filterTools } from "../../actions/";

const SearchBar = (props) => (
    <div className="search-bar">
        <input
            type="search"
            className="w-full rounded-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            placeholder="Mot-clé pour filtrer les applications"
            onChange={(event) => props.filterTools(event.target.value)}
        />
    </div>
);

export default connect(null, { filterTools })(SearchBar);
