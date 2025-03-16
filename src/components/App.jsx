// src/components/App.js
import React from "react";
import Navbar from "./Navbar";
import ToolDescription from "./ToolDescripton";
import Sidebar from "./Sidebar";

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
