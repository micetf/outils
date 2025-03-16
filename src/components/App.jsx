// src/components/App.js
import React from "react";
import Navbar from "./Navbar";
import ToolDescription from "./ToolDescripton";
import Sidebar from "./Sidebar";
import NavbarSpacer from "./Navbar/NavbarSpacer";

export default () => {
    return (
        <>
            <Navbar />
            <NavbarSpacer />
            <div className="container">
                <div className="row">
                    <ToolDescription />
                    <Sidebar />
                </div>
            </div>
        </>
    );
};
