import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber } from "@jbuschke/formik-antd";
import {Button, Modal, Row, Col,  Checkbox} from 'antd';
import { Formik } from 'formik';

import cogoToast from 'cogo-toast';

import ImageUploader from '../../../helpers/ImageUploader';

import {AxiosApiPost} from '../../../helpers/AxiosApi';

const { Option } = Select;

const ModalAddClient = ( {text, complete } ) => {

  const [ visible , setVisible] = useState(false);
  const [ loading, setLoading ] = useState(false);

  //Fields
  const [ nameField, setNameField ] = useState ( "" );
  const [ emailfield , setEmailField ] = useState ( "" );
  const [ documentField , setDocumentField ] = useState("");
  const [ cellphoneField, setCellphoneField ] = useState( "" );


  //Call Api
  async function PostApi()  {
    setLoading(true);

    var values = {
        "name" : nameField,
        "email" : emailfield,
        "document" : documentField,
        "cellphone" : cellphoneField
    }

    AxiosApiPost('api/customer', values )
    .then ( response => {
      if (response.status === 200) {

        console.log(response);

        complete();

        setLoading(false);
        setVisible(false);

        cogoToast.success('Se ha registrado correctamente el cliente.');

      } else {
        setLoading(false);
        cogoToast.error('Hubo un error al ingresar, intente nuevamente');
      }
    })
    .catch(function(error) {
      setLoading(false);
      cogoToast.error('Hubo un error al ingresar, intente nuevamente');
    });
  }


  function handleOk () { PostApi() }

  function handleCancel () { setVisible(false) }

  function showModal () { setVisible(true) }

  return (
    <div>
      <Button onClick={ showModal } size={"large"} type="primary" icon="plus"> {text} </Button>

      <Modal
        visible={visible}
        title="Agregar un Producto"
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
                    <Input onChange={event => setNameField(event.target.value) } value={nameField} size={"large"} name="name" placeholder="name" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item style={{ padding: '15px'}} label="Email" name="Email" >
                    <Input onChange={event => setEmailField(event.target.value) } value={emailfield} size={"large"} name="name" placeholder="name" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item style={{ padding: '15px'}} label="Identificación" name="Identificación" >
                    <Input onChange={event => setDocumentField(event.target.value) } value={documentField} size={"large"} name="name" placeholder="name" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item style={{ padding: '15px'}} label="Teléfono" name="Teléfono" >
                    <Input onChange={event => setCellphoneField(event.target.value) } value={cellphoneField} size={"large"} name="name" placeholder="name" />
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

export default ModalAddClient;
