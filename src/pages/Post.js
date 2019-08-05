import React from 'react';
import InfoPost from "../components/InfoPost";
import Content from "../components/Content/Content";

export default (nav) => {
    return (
        <Content>
            <InfoPost navigate={nav}/>
        </Content>
    );
};