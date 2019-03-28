import React from "react";
import ToolsList from "../containers/container-tools-list";
import ToolDescription from "../containers/container-tool-description";

export default () => (
  <div>
    <div className="row">
      <ToolDescription />
      <ToolsList />
    </div>
  </div>
);
