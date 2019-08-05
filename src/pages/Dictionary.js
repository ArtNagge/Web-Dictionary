import React from 'react';
import ListItems from "../components/ListItems/ListItems";
import Content from "../components/Content/Content";
import SelectCategory from "../components/SelectCategory";

export default ({match}) => {
    const {category} = match.params;
    return (
        <Content>
            {
                category
                    ? <ListItems match={match} />
                    : <SelectCategory/>
            }
        </Content>
    );
};