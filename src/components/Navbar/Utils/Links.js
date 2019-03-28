import React from "react";
import Link from "./Link";

const renderLink = (item, id) => (
    <li className="nav-item" key={id}>
        <Link {...item} />{" "}
    </li>
);

const renderLinks = items => items.map(renderLink);

export default ({ links }) => (
    <ul className="navbar-nav mr-auto"> {renderLinks(links)} </ul>
);
