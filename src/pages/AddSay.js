import React from 'react';
import Content from "../components/Content";
import Form from '../components/Form';
import {connect} from "react-redux";

const AddSay = ({sidebar}) => {
  return (
    <Content>
      <div className="ListItems addSay">
        <h2>Добавьте слово</h2>
        <Form
          apiMethod="addWord"
          inputs={[{
            name: 'title',
            placeholder: 'Название',
            icon: 'document',
            type: 'input'
          }, {name: 'body', placeholder: 'Описание', icon: 'quote', type: 'textarea'}]}
          selects={[{name: 'category', placeholder: 'Категория', elements: sidebar}]}/>
      </div>
    </Content>
  );
};

const mapStateToProps = ({sidebar}) => {
  return {sidebar}
};

export default connect(mapStateToProps)(AddSay);
