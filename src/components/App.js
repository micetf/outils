import React from "react";

import Navbar from "./Navbar";
import ToolDescription from "./ToolDescripton";
import Sidebar from "./Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.scss";

export default () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <ToolDescription />
                    <Sidebar />
                </div>
            </div>
        </>
    );
};
