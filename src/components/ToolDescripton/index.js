import React, { useRef } from "react";
import { connect } from "react-redux";

const ToolDescription = (props) => {
    const embed = useRef(null);

    const handleCopy = (e) => {
        e.preventDefault();
        console.log(embed.current.textContent);
        navigator.clipboard.writeText(embed.current.textContent);
    };
    if (!props.tool) {
        return (
            <h3 className="text-center alert alert-warning">
                <span className="glyphicon glyphicon-arrow-left" /> Choisis un
                outil.
            </h3>
        );
    }
    const embeded = (yrl) => (
        <code className="clearfix" ref={embed} title="Code d'intégration">
            &lt;iframe src={`https://micetf.fr/${url}`} width="980" height="735"
            frameborder="0" &gt;&lt;/iframe&gt;
        </code>
    );
    const { title, url, image, description } = props.tool;
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
                            src={`./thumbnails/${image}`}
                            alt={image}
                            className="img-fluid"
                        />
                    </a>
                </div>
                <div className="card-footer text-justify">
                    <div className=" mb-2">
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
