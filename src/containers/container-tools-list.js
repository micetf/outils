import React, { Component } from 'react';
import Tooltip from 'react-tooltip-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTool } from '../actions/';
import SearchBar from './container-search-bar.js';

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
        return ok || keyword.indexOf(term) === 0
      }, false);
    });
  }

  renderList(tools) {
    return tools.map(tool => {
      return (
        <Tooltip
          key={tool.url}
          title={tool.keywords.join(', ')}
          position='left'>
          <li
            onClick={() => this.props.selectTool(tool)}
            className="list-group-item">
              {tool.title}
          </li>
        </Tooltip>
      )
    })
  }
  render() {
    const tools = this.filterList();

    return (
      <div className="col-sm-4">
        <div className="panel panel-info">
          <div className="panel-heading text-center">
            <SearchBar />
            <h4>
              Nombre d'outils : <span className="badge">{tools.length}</span>
            </h4>
          </div>
          <ul className="list-group panel-body">
            {this.renderList(tools)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tools: state.toolsList,
    term: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectTool: selectTool }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsList);

