import React from 'react';
import Icon from "../components/Icon";
import MainContent from "../components/MainContent/MainContent";

const Contacts = () => {
    return (
        <MainContent>
            <h1>Контакты</h1>
            <span className="lineContact">
                    <Icon.MIcon nameIcon="code-working" fS={24}/>
                    Разработчик: <a href="https://nagge.ru/">Nagge.ru</a>
                </span>
            <span className="lineContact">
                    <Icon.MIcon nameIcon="mail" fS={24}/>
                    Почта: <a href="mailto:artnagge@gmail.com">artnagge@gmail.com</a>
                </span>
        </MainContent>
    );
};

export default Contacts;