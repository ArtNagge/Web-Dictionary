import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import ListItems from "../components/ListItems/ListItems";

export default ({match}) => {
    return (
        <div className={"Dictionary_Content"}>
            <Sidebar/>
            <ListItems match={match} />
        </div>
    );
};