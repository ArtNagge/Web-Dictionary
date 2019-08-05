import Sidebar from "../Sidebar";
import React from "react";

const Content = (props) => {
    return (
        <div className={"Dictionary_Content"}>
            <Sidebar/>
            {props.children}
        </div>
    )
};

export default Content;