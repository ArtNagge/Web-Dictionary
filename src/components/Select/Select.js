import React, {Component} from 'react';
import Icon from "../Icon";

export default class Select extends Component {

    state = {
        showSelectMenu: false,
        currentItem: ""
    };

    handleChange = (e) => {
        this.props.callback(e);
        const target = e.target;
        const name = target.id;
        const value = target.dataset.value;
        this.setState({[name]: value });
    };

    showSelectMenu = () => {
        this.setState({showSelectMenu: !this.state.showSelectMenu});
        document.addEventListener('click', this.closeSelectMenu);
    };
    closeSelectMenu = () => {
        this.setState({showSelectMenu: false});
        document.removeEventListener('click', this.closeSelectMenu);
    };

    render() {
        const {info} = this.props;
        const {[info.name]: currentItem, showSelectMenu} = this.state;
        return (
            <div className={'select'}>
                <div className={"currentItem"} onClick={this.showSelectMenu}>
                    <div className={'iconContainer'}>
                        <Icon.MIcon nameIcon={"arrow-dropdown"}/>
                    </div>
                    {currentItem ? currentItem : info.placeholder}
                </div>
                {showSelectMenu && <nav className={"menuSelect"}>
                    {info.elements.map((item, idx) => (
                        <li key={idx} data-value={item.title} id={info.name} onClick={this.handleChange}>
                            <Icon.MIcon nameIcon={item.icon.nameIcon}/>
                            {item.title}
                        </li>
                    ))}
                </nav>}
            </div>
        )
    }
}