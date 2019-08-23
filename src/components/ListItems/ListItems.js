import React from 'react';
import Chip from "../Chip/Chip";
import Icon from "../Icon";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {setCurrentPage} from '../../actions/postsActions';

const ListItems = (props) => {


    const {posts, match, currentPage, numberOnPage, setCurrentPage} = props;
    const category = match.params.category;

    const currentPosts = posts.filter((item) => item.category === category);

    const indexLastPost = currentPage * numberOnPage;
    const indexFirstPost = indexLastPost - numberOnPage;
    const returnPosts = currentPosts.slice(indexFirstPost, indexLastPost);

    let numbersPages = [];
    for(let i = 1; i <= Math.ceil(currentPosts.length / numberOnPage); i++) {
        numbersPages.push(i);
    }

    const changePost = (event) => {
        setCurrentPage(+event.target.id)
    };

    return (
        <div className={"ListItems"}>
            {
                returnPosts.map((item, index) => (
                    <Link to={'/d/' + category + '/' + item.id} key={index}>
                        <div className={"TermBlock"}>
                            <span className={"TermBlock_title"}>{item.title.substr(0, 20)}</span>
                            <p className={"TermBlock_description"}>
                                <Icon.MIcon nameIcon={"quote"} id={"QuoteBefore"} />
                                {
                                    item.description.length > 200
                                        ? `${item.description.slice(0, 197)}...`
                                        : item.description
                                }
                                <Icon.MIcon nameIcon={"quote"} id={"QuoteAfter"} />
                            </p>
                            <div className={"TermBlock_buttons"}>
                                <Chip title={"Подробнее"} color={'green'} icon={"more"} />
                            </div>
                        </div>
                    </Link>
                ))
            }
            {numbersPages.length > 1 && <ul className={'pagination'}>
                {numbersPages.map((item, index) => (
                    <li onClick={changePost} className={item === currentPage ? 'active' : null } key={item+index} id={item}>
                        {item}
                    </li>
                ))}
            </ul>}
        </div>
    )
};

const mapStateToProps = ({posts, currentPage, numberOnPage}) => {
    return {posts, currentPage, numberOnPage}
};

export default connect(mapStateToProps, {setCurrentPage})(ListItems);