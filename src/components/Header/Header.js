import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render () {
        return (
            <div className={"container"}>
                <header className={"header"}>
                    <h2><b className={"baseColor"}>W</b>D<a href="https://nagge.ru/">.n</a></h2>
                    <nav className={"header-nav"}>
                        <Link to="/" >Главная</Link>
                        <Link to="/dictionary/" >Словарь</Link>
                        <Link to="/contacts/" >Контакты</Link>
                    </nav>
                </header>
            </div>
        );
    }
};