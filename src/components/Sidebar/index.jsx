import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { selectTool } from "../../actions/";
import SearchBar from "./Searchbar";
import Link from "./Link";

// Composant Tooltip personnalisé
const CustomTooltip = ({ title, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}
            {showTooltip && (
                <div className="absolute left-0 transform -translate-x-full top-0 bg-gray-800 text-white text-xs rounded py-1 px-2 z-50 w-max max-w-xs">
                    {title}
                </div>
            )}
        </div>
    );
};

const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

class ToolsList extends Component {
    constructor(props) {
        super(props);
        props.selectTool(props.tools[0]);
    }

    filterList() {
        const term = removeAccents(this.props.term.toLowerCase());
        return this.props.tools.filter((tool) => {
            const keywords = tool.keywords.map(removeAccents);
            return keywords.reduce((ok, keyword) => {
                return ok || keyword.indexOf(term) === 0;
            }, false);
        });
    }

    renderList(tools) {
        return tools.map((tool) => {
            return (
                <CustomTooltip key={tool.url} title={tool.keywords.join(", ")}>
                    <li className="list-group-item">
                        <Link
                            url="#"
                            handleClick={() => this.props.selectTool(tool)}
                        >
                            {tool.title}
                        </Link>
                    </li>
                </CustomTooltip>
            );
        });
    }

    render() {
        const tools = this.filterList();

        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header bg-info text-center">
                        <SearchBar />
                        <h6 className="card-subtitle my-2">
                            {`Nombre d'outils : `}
                            <span className="badge bg-white text-blue-500">
                                {tools.length}
                            </span>
                        </h6>
                    </div>
                    <ul className="list-tools list-group card-body">
                        {this.renderList(tools)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tools: state.toolsList,
    term: state.searchTerm,
});

export default connect(mapStateToProps, { selectTool })(ToolsList);
