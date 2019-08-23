import React, {Component} from 'react';
import Icon from "../Icon";

export default class Input extends Component{

    state = {
        value: ""
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({value});
        this.props.callback(e);
    };

    render() {
        const {item} = this.props;
        const {value} = this.state;
        return (
            <div className={'customInput'}>
                <div className={'iconContainer'}>
                    <Icon.MIcon nameIcon={item.icon}/>
                </div>
                <input type="text" name={item.name} value={value} onChange={this.handleChange} placeholder={item.placeholder}/>
            </div>
            //<span ref={this.errorInfo} className={'errorInfo'}></span>
        )
    }
}