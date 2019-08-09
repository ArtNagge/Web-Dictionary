import React from 'react';
import {connect} from "react-redux";
import Chip from "../Chip";
import Icon from "../Icon";

class InfoPost extends React.Component {

    state = {};

    componentDidMount() {
        this.mount();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.mount(prevProps);
    }

    mount(prevProps) {
        const {post} = this.props;
        if (prevProps && prevProps.post === post) return false;
        this.setState(post);
    }

    render() {
        const {title, description, category} = this.state;
        const {navigate: {history}} = this.props;
        return (
            <div className={"ListItems InfoPost"}>
                <span className={'goBack'} onClick={history.goBack}><Icon.MIcon nameIcon={"arrow-back"}/>Вернутся назад</span>
                <div className={'mainInfo'}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={'otherInfo'}>
                    <Chip title={category ? category : '--------'} color={'green'} icon={"list"}/>
                    <Chip title={"Сообщить об ошибке"} color={'red'} icon={"alert"} />
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({posts}, ownProps) => {
    const idPost = ownProps.navigate.match.params.idPost;
    const categoryPost = ownProps.navigate.match.params.category;
    return {post: posts.find(({id, category}) => id.toString() === idPost && category === categoryPost)}
};

export default connect(mapStateToProps)(InfoPost);