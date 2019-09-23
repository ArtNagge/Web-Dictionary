import React from 'react';
import Form from "../components/Form";
import Content from "../components/Content";

const Report = (props) => {
  const id = props.match.params.id;
  return (
    <Content>
      <div className="ListItems addSay">
        <h2>Сообщить об ошибке</h2>
        <Form
          apiMethod="report"
          inputs={[
            {
              name: 'id',
              value: `ID записи ${id}`,
              icon: 'albums',
              type: 'input',
              disable: true
            },
            {
              name: 'body',
              placeholder: 'Описание ошибки',
              icon: 'quote',
              type: 'textarea'
            }]}/>
      </div>
    </Content>
  )
};

export default Report;
