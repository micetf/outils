import React from "react";

import Links from "../../Utils/Links";
import Paypal from "./Paypal";

const getClassName = (show) =>
    ["collapse", "navbar-collapse", show ? "show" : ""].join(" ");

const NavbarCollapse = ({ show, menu }) => (
    <div className={getClassName(show)} id="navbarSupportedContent">
        <Links links={menu} />
        <Paypal />
    </div>
);

export default NavbarCollapse;
