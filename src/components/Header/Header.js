import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={"container"}>
            <header className={"header"}>
                <h2><b className={"baseColor"}>W</b>D<a href="https://nagge.ru/">.n</a></h2>
                <nav className={"header-nav"}>
                    <Link to="/" >Главная</Link>
                    <Link to="/d/" >Словарь</Link>
                    <Link to="/contacts/" >Контакты</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;