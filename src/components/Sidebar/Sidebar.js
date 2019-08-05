import React from 'react';
import {NavLink, Link} from "react-router-dom";
import Icon from "../Icon";
import {connect} from "react-redux";

 const Sidebar = ({sidebar}) => {
    return (
        <div className="SidebarContainer">
            <div className={"Sidebar"}>
                {
                    sidebar.map((item, index) => {
                        return (
                            <NavLink to={`/d/${item.url}`} key={index}>
                                <Icon.MIcon {...item.icon}/>
                                {item.title}
                            </NavLink>
                        )
                    })
                }
                <Link to="/addsay" key={1337} className={"AddButton"}>
                    <Icon.MIcon nameIcon={"add-circle-outline"} fS={22}/>Пополнить словарь
                </Link>
            </div>
        </div>
    );
};

 const mapStateToProps = ({sidebar}) => {
     return {sidebar}
 };

export default connect(mapStateToProps)(Sidebar)