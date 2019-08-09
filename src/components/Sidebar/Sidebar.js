import React from 'react';
import {NavLink, Link} from "react-router-dom";
import Icon from "../Icon";
import {connect} from "react-redux";
import {setCurrentPage} from '../../actions/postsActions';

 const Sidebar = ({sidebar, setCurrentPage}) => {

     const onHandler = () => setCurrentPage(1);

    return (
        <div className="SidebarContainer">
            <div className={"Sidebar"} onClick={onHandler}>
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

export default connect(mapStateToProps, {setCurrentPage})(Sidebar)