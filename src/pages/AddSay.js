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
                    inputs={[{name: 'title', placeholder: 'Название', icon: 'document', validityLength: 2}, {name: 'body', placeholder: 'Описание', icon: 'quote', validityLength: 100}]}
                    selects={[{name: 'category',  placeholder: 'Категория', elements: sidebar}]}/>
            </div>
        </Content>
    );
};

const mapStateToProps = ({sidebar}) => {
    return {sidebar}
};

export default connect(mapStateToProps)(AddSay);