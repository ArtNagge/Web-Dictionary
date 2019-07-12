import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Icon from "../components/Icon";

export default ({match}) => {
    return (
        <div className={"Dictionary_Content"}>
            <Sidebar/>
            <div className={"ListItems noMatch"}>
                <Icon.IIcon nameIcon="arrow-back" fS={30}/>
                <h2>Выберите категорию</h2>
            </div>
        </div>
    );
};