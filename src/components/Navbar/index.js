import React from "react";

import * as links from "./config";
import Link from "./Utils/Link";
import Menu from "./Menu/";

export default () => (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <Link {...links.brand} />
        <Menu menu={links.menu} />
    </nav>
);
