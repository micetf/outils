import React from "react";
import { connect } from "react-redux";

const ToolDescription = props => {
    if (!props.tool) {
        return (
            <h3 className="text-center alert alert-warning">
                <span className="glyphicon glyphicon-arrow-left" /> Choisis un
                outil.
            </h3>
        );
    }
    const { title, url, image, description } = props.tool;
    return (
        <div className="col-sm-8">
            <div className="card text-center">
                <div className="card-title bg-primary rounded-top">
                    <h3 className="my-4">{title}</h3>
                </div>
                <div className="card-body">
                    <a
                        href={`../${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`./thumbnails/${image}`}
                            alt={image}
                            className="img-fluid"
                        />
                    </a>
                </div>
                <div className="card-footer text-justify">{description}</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tool: state.selectedTool,
});

export default connect(mapStateToProps)(ToolDescription);
