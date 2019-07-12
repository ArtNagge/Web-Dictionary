import React from 'react';
import Sidebar from "../components/Sidebar";
import InfoPost from "../components/InfoPost";

export default (nav) => {
    return (
        <div className={"Dictionary_Content"}>
            <Sidebar/>
            <InfoPost navigate={nav}/>
        </div>
    );
};