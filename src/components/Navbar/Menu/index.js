import React, { useState } from "react";

import NavbarToggler from "./NavbarToggler/";
import NavbarCollapse from "./NavbarCollapse/";

export default ({ menu }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <NavbarToggler handleNavbarToggler={e => setShow(!show)} />
            <NavbarCollapse show={show} menu={menu} />
        </>
    );
};
