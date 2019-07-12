import React, {useState, useEffect} from 'react';
import apiWorker from '../../utils/apiWorker';
import Chip from "../Chip/Chip";
import Icon from "../Icon";
import {inject, observer} from "mobx-react";


const ListItems = inject('store')(observer(({store, match}) => {

    const [posts, setPosts] = useState([]);
    const category = match.params.category;
    const capitalize = function(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    useEffect(
        () => {
            setPosts(apiWorker.getPosts(category));
        }, [category]
    );

    return (
        <div className={"ListItems"}>
            {
                posts.map((item, index) => (
                    <div key={index} className={"TermBlock"}>
                        <span className={"TermBlock_title"}>{capitalize(item.title).substr(0, 20)}</span>
                        <p className={"TermBlock_description"}>
                            <Icon.MIcon nameIcon={"quote"} id={"QuoteBefore"} />
                            {
                                item.description.length > 200
                                    ? `${capitalize(item.description).slice(0, 197)}...`
                                    : capitalize(item.description)
                            }
                            <Icon.MIcon nameIcon={"quote"} id={"QuoteAfter"} />
                        </p>
                        <div className={"TermBlock_buttons"}>
                            <Chip title={"Подробнее"} color={'green'} icon={"more"} />
                            <Chip title={"Сообщить об ошибке"} color={'red'} icon={"alert"} />
                        </div>
                    </div>
                ))
            }
        </div>
    );

}));

export default ListItems;