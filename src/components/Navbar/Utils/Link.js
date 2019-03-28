import React from "react";

export default props => (
    <a {...props}>
        {" "}
        {props.link}{" "}
        {props.current ? <span className="sr-only"> (current) </span> : ""}{" "}
    </a>
);
