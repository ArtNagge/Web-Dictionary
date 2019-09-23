import React from 'react';
import PropTypes from 'prop-types';
import Select from "../Select";
import Input from "../Input";
import ApiWorker from "../../utils/ApiWorker";

const api = new ApiWorker();

class Form extends React.Component {

  errorField = React.createRef();

  state = {};

  componentDidMount() {
    const id = this.props.inputs[0];
    id && this.setState({id: id.value});
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name || target.id;
    const value = target.value || target.dataset.value;
    this.setState({[name]: value});
  };

  submitForm = (evt) => {
    evt.preventDefault();
    const errorField = this.errorField.current;
    api[this.props.apiMethod](this.state).then(r => {
      switch (r) {
        case "ok":
          errorField.textContent = "Спасибо! Заявка отправлена на обработку";
          errorField.classList.add('current');
          errorField.classList.add('show');
          break;
        default:
          errorField.textContent = r;
          errorField.classList.add('show');
          break;
      }
    });
  };

  render() {
    const {inputs, selects} = this.props;
    return (
      <form className={'mainForm'} onSubmit={this.submitForm}>
        {inputs.map((item, index,) => (
          <Input callback={this.handleChange} item={item} key={index}/>
        ))}
        {selects.length > 0 ? <div className={"selectsContainer"}>
          {selects.map((item, index) => (
            <Select callback={this.handleChange} info={item} key={index}/>
          ))}
          <button className={'formButton'}>Отправить</button>
        </div> : <button className={'formButton'}>Отправить</button>}
        <div className="errorField" ref={this.errorField}>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  inputs: PropTypes.array,
  selects: PropTypes.array
};
Form.defaultProps = {
  inputs: [],
  selects: []
};

export default Form;
