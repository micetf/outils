import React from "react";

export default ({ url, children, handleClick }) => (
    <a onClick={handleClick} href={url}>
        {children}
    </a>
);
