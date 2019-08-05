import Icon from "../Icon";
import React from "react";

function SelectCategory() {
    return(
        <div className={"ListItems noMatch"}>
            <Icon.IIcon nameIcon="arrow-back" fS={30}/>
            <h2>Выберите категорию</h2>
        </div>
    )
}

export default SelectCategory;