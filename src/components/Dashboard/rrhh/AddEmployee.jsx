import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber } from "@jbuschke/formik-antd";
import {Button, Modal, Row, Col,  Checkbox} from 'antd';
import { Formik } from 'formik';

import ImageUploader from '../../../helpers/ImageUploader';

const { Option } = Select;

const ModalAddEmployee = ( {text} ) => {

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
        title="Agregar un Empleado"
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
        <Formik
          initialValues={{ firstName: "", age: 20, newsletter: false }}
          render={()=> (
            <Form style={{paddingBottom: '40px'}}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item style={{ padding: '15px'}} label="Nombre" name="Nombre" >
                    <Input size={"large"} name="Name" placeholder="Ingresa el nombre" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Identificación" name="identification" >
                    <Input size={"large"} name="Document Number" placeholder="Ingresa la identificación" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Email" name="Email" >
                    <Input size={"large"} name="Email" placeholder="Ingresa el email" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Teléfono" name="Cellphone" >
                    <Input size={"large"} name="phone" placeholder="Ingresa el Teléfono" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Fotografía" name="picture" >
                    <ImageUploader></ImageUploader>
                  </Form.Item>
                </Col>


              </Row>

            </Form>
          )}
        />


      </Modal>
    </div>
  )
}

export default ModalAddEmployee;
