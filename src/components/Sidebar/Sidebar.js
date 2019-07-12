import React from 'react';
import {NavLink} from "react-router-dom";
import {inject, observer} from "mobx-react";
import Icon from "../Icon";

export default inject('store')(observer(({store}) => {
    return (
        <div className="SidebarContainer">
            <div className={"Sidebar"}>
                {
                    store.sidebarMenu.map((item, index) => {
                        return (
                            <NavLink to={`/dictionary/${item.url}`} key={index}>
                                <Icon.MIcon {...item.icon}/>
                                {item.title}
                            </NavLink>
                        )
                    })
                }
                <a href="#" key={1337} className={"AddButton"}>
                    <Icon.MIcon nameIcon={"add-circle-outline"} fS={22}/>Пополнить словарь
                </a>
            </div>
        </div>
    );
}));