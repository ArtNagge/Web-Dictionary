import React from 'react';
import PropTypes from 'prop-types';
import Select from "../Select";
import Input from "../Input";
import axios from 'axios';

class Form extends React.Component {

    errorField = React.createRef();

    state = {};

    handleChange = (e) => {
        const target = e.target;
        const name = target.name || target.id;
        const value = target.value || target.dataset.value;
        this.setState({[name]: value });
    };

    submitForm = (evt) => {
        evt.preventDefault();
        const errorField = this.errorField.current;
        axios.post('http://localhost/api/addword', {params: this.state})
            .then(({data}) => {
                switch (data) {
                    case "ok":
                        errorField.textContent = "Спасибо! Слово отправлено на обработку";
                        errorField.classList.add('current');
                        errorField.classList.add('show');
                        break;
                    default:
                        errorField.textContent = data;
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
                {selects.length && <div className={"selectsContainer"}>
                    {selects.map((item, index) => (
                        <Select callback={this.handleChange} info={item} key={index}/>
                    ))}
                    <button className={'formButton'}>Отправить</button>
                </div>}
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