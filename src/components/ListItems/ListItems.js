import React from 'react';
// import Chip from "../Chip/Chip";
// import Icon from "../Icon";
// import {Link} from 'react-router-dom';

const ListItems = ({match}) => {

    return (
        <div className={"ListItems"}>
            1111
            {/*{*/}
            {/*    posts.map((item, index) => (*/}
            {/*        <div key={index} className={"TermBlock"}>*/}
            {/*            <span className={"TermBlock_title"}>{capitalize(item.title).substr(0, 20)}</span>*/}
            {/*            <p className={"TermBlock_description"}>*/}
            {/*                <Icon.MIcon nameIcon={"quote"} id={"QuoteBefore"} />*/}
            {/*                {*/}
            {/*                    item.description.length > 200*/}
            {/*                        ? `${capitalize(item.description).slice(0, 197)}...`*/}
            {/*                        : capitalize(item.description)*/}
            {/*                }*/}
            {/*                <Icon.MIcon nameIcon={"quote"} id={"QuoteAfter"} />*/}
            {/*            </p>*/}
            {/*            <div className={"TermBlock_buttons"}>*/}
            {/*                <Link to={'/dictionary/'}><Chip title={"Подробнее"} color={'green'} icon={"more"} /></Link>*/}
            {/*                <Chip title={"Сообщить об ошибке"} color={'red'} icon={"alert"} />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );

};
export default ListItems;