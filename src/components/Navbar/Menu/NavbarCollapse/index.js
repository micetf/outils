import React from "react";

import Links from "../../Utils/Links";
import GoogleSearch from "./GoogleSearch";
import Paypal from "./Paypal";

const getClassName = show =>
    ["collapse", "navbar-collapse", show ? "show" : ""].join(" ");
export default ({ show, menu }) => (
    <div className={getClassName(show)} id="navbarSupportedContent">
        <Links links={menu} />
        <Paypal />
        <GoogleSearch />
    </div>
);
