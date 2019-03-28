import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ToolDescription = props => {
  if (!props.tool) {
    return (
      <h3 className="text-center alert alert-warning">
        <span className="glyphicon glyphicon-arrow-left" /> Choisis un outil.
      </h3>
    );
  }
  const { title, url, image, description } = props.tool;
  return (
    <div className="col-sm-8">
      <div className="panel panel-primary text-center">
        <div className="panel-heading">
          <h3>{title}</h3>
        </div>
        <div className="panel-body">
          <a href={`../${url}`} target="_blank">
            <img
              src={`../images-micetf/${image}`}
              alt={image}
              className="img-responsive"
            />
          </a>
        </div>
        <div className="panel-footer text-justify">{description}</div>
      </div>
    </div>
  );
};

ToolDescription.propTypes = {
  tool: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateToProps = state => ({
  tool: state.selectedTool,
});

export default connect(mapStateToProps)(ToolDescription);
