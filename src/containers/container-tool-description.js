import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToolDescription extends Component {
  render() {
    if (!this.props.tool) {
      return (
        <h3 className="text-center alert alert-warning">
          <span className="glyphicon glyphicon-arrow-left"></span> Choisis un outil.
        </h3>
      )
    }
    return (
      <div className="col-sm-8">
        <div className="panel panel-primary text-center">
          <div className="panel-heading">
            <h3>{this.props.tool.title}</h3>
          </div>
          <div className="panel-body">
            <a href={'https://micetf.fr/' + this.props.tool.url} target="_blank">
              <img src={'images/' + this.props.tool.image} alt={this.props.tool.image} className="img-responsive" />
            </a>
          </div>
          <div className="panel-footer text-justify">
            {this.props.tool.description}
          </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tool: state.selectedTool
  }
}

export default connect(mapStateToProps)(ToolDescription);
