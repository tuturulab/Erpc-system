import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber } from "@jbuschke/formik-antd";
import {Button, Modal, Row, Col,  Checkbox} from 'antd';


const { Option } = Select;

const ModalAddCalendar = ( {text} ) => {

  const [ visible , setVisible] = useState(false);

  function handleOk () {

  }

  function handleCancel () {
    setVisible(false);
  }

  function showModal () {
    setVisible(true);
  }

  return (
    <div>
      <Button onClick={ showModal } size={"large"} type="primary" icon="plus"> {text} </Button>

      <Modal
        visible={visible}
        title="Agregar un Evento"
        onOk={handleOk}
        onCancel={handleCancel}
        width={"90%"}
        style={{maxWidth : '700px'}}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Atrás
          </Button>,
          <Button key="submit" type="primary"  onClick={handleOk}>
            Ingresar
          </Button>,
        ]}
      >



      </Modal>
    </div>
  )
}

export default ModalAddCalendar;
