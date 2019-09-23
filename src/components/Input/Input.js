import React, {Component, createRef} from 'react';
import Icon from "../Icon";

export default class Input extends Component {

  textArea = createRef();

  state = {
    value: ""
  };

  componentDidMount() {
    this.setState({value: this.props.item.value || ""})
  }

  autosize(){
    const el = this;
    setTimeout(function(){
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  }

  handleChange = (e) => {
    const value = e.target.value;
    if (e.target.tagName.toLowerCase() === 'textarea') this.textArea.current.addEventListener('input', this.autosize);
    this.setState({value});
    this.props.callback(e);
  };

  renderField = (item) => {
    const {value} = this.state;
    switch (item.type) {
      case "input":
        return <input type="text" disabled={item.disable && true} name={item.name} value={value}
                      onChange={this.handleChange}
                      placeholder={item.placeholder}/>
      case "textarea":
        return <textarea ref={this.textArea} disabled={item.disable && true} name={item.name} value={value} onChange={this.handleChange}
                         placeholder={item.placeholder}/>
      default:
        return null
    }
  };

  render() {
    const {item} = this.props;
    return (
      <div className={'customInput'}>
        <div className={'iconContainer'}>
          <Icon.MIcon nameIcon={item.icon}/>
        </div>
        {this.renderField(item)}
      </div>
    )
  }
}
