import React, { Component } from "react";
import Tooltip from "react-tooltip-component-16";
import { connect } from "react-redux";
import "react-tooltip-component-16/lib/tooltip.css";
import { selectTool } from "../../actions/";
import SearchBar from "./Searchbar";
import Link from "./Link";

class ToolsList extends Component {
    constructor(props) {
        super(props);
        props.selectTool(props.tools[0]);
    }

    filterList() {
        const term = this.props.term.toLowerCase();
        return this.props.tools.filter(tool => {
            const keywords = tool.keywords;
            return keywords.reduce((ok, keyword) => {
                return ok || keyword.indexOf(term) === 0;
            }, false);
        });
    }

    renderList(tools) {
        return tools.map(tool => {
            return (
                <Tooltip
                    key={tool.url}
                    title={tool.keywords.join(", ")}
                    position="left"
                >
                    <li className="list-group-item">
                        <Link
                            url="#"
                            handleClick={() => this.props.selectTool(tool)}
                        >
                            {tool.title}
                        </Link>
                    </li>
                </Tooltip>
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
                            <span className="badge">{tools.length}</span>
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

const mapStateToProps = state => ({
    tools: state.toolsList,
    term: state.searchTerm,
});

export default connect(
    mapStateToProps,
    { selectTool }
)(ToolsList);
