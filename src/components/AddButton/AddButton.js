import React from 'react';
import Icon from '../Icon';

const AddButton = () => {
    return (
        <a href="#" className={"AddButton"}>
            <Icon.MIcon nameIcon={"add-circle-outline"} fS={19}/>Пополнить словарь
        </a>
    );
};

export default AddButton;