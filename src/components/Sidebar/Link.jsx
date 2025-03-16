// src/components/Sidebar/Link.js
import React from "react";

export default ({ url, children, handleClick }) => (
    <a onClick={handleClick} href={url} className="block">
        {children}
    </a>
);
