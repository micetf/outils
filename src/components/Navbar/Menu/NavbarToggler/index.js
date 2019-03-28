import React from "react";

export default ({ handleNavbarToggler }) => (
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleNavbarToggler}
    >
        <span className="navbar-toggler-icon" />
    </button>
);
