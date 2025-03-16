// src/components/ToolDescripton/index.js
import React, { useRef } from "react";
import { connect } from "react-redux";
import { getFullThumbnailPath } from "micetf-data";

const ToolDescription = (props) => {
    const embed = useRef(null);

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(embed.current.textContent);
    };

    if (!props.tool) {
        return (
            <h3 className="alert alert-warning text-center">
                <span className="glyphicon glyphicon-arrow-left"></span> Choisis
                un outil.
            </h3>
        );
    }

    const embeded = (url) => (
        <code className="clearfix block" ref={embed} title="Code d'intégration">
            &lt;iframe src="{`https://micetf.fr/${url}`}" width="980"
            height="735" frameborder="0" &gt;&lt;/iframe&gt;
        </code>
    );

    const { title, url, thumbnail, description } = props.tool;
    const thumbnailUrl = getFullThumbnailPath(thumbnail);
    console.log(thumbnailUrl);
    return (
        <div className="col-sm-8">
            <div className="card text-center">
                <div className="card-title bg-primary rounded-top">
                    <h3 className="my-4">{title}</h3>
                </div>
                <div className="card-body">
                    <a
                        href={`https://micetf.fr/${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Accéder à l'outil..."
                    >
                        <img
                            src={thumbnailUrl}
                            alt={title}
                            className="img-fluid w-100"
                        />
                    </a>
                </div>
                <div className="card-footer text-justify">
                    <div className="mb-2">
                        {description} (
                        <a
                            href={`https://micetf.fr/${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Accéder à l'outil..."
                        >
                            Accéder à l'outil...
                        </a>
                        )
                    </div>
                    <div className="border border-secondary my-1 p-1">
                        {embeded(url)}
                        <button
                            className="mt-1 float-right btn btn-outline-dark"
                            onClick={handleCopy}
                            title="Copier le code d'intégration dans le presse-papier."
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tool: state.selectedTool,
});

export default connect(mapStateToProps)(ToolDescription);
