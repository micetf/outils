import React, { Component } from 'react';
import ToolsList from '../containers/container-tools-list';
import ToolDescription from '../containers/container-tool-description';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <ToolDescription />
          <ToolsList />
        </div>
      </div>
    );
  }
}

