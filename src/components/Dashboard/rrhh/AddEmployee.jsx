import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber } from "@jbuschke/formik-antd";
import {Button, Modal,Spin, Row, Col,  Checkbox} from 'antd';
import { Formik } from 'formik';

import cogoToast from 'cogo-toast';

import ImageUploader from '../../../helpers/ImageUploader';

import {AxiosFormData} from '../../../helpers/AxiosApi';

const { Option } = Select;

const ModalAddEmployee = ( {text, complete} ) => {

  const [ visible , setVisible] = useState(false);
  const [ loading , setLoading ] = useState (false);

  //Fields
  const [ nameField, setNameField ] = useState ( "" );
  const [ emailField , setEmailField ] = useState ( "" );
  const [ documentField , setDocumentField ] = useState("");
  const [ phoneField, setPhoneField ] = useState( "" );
  const [ descriptionField, setDescriptionField ] = useState( "" );
  const [ pictureField , setPictureField ] = useState ( "" );

  //Call Api
  async function PostApi()  {
    setLoading(true);

    //Send data as FORMDATA
    let formData = new FormData();

    if (pictureField !== null || pictureField !== "")
      formData.append("Picture", pictureField );

    formData.append("Name", nameField );
    formData.append("Email", emailField );
    formData.append("DocumentNumber", documentField );
    formData.append("Cellphone", phoneField );
    formData.append("Description", descriptionField );

    AxiosFormData('api/employee', formData )
    .then ( response => {
      if (response.status === 200) {

        console.log(response);

        complete();

        setLoading(false);
        setVisible(false);

        cogoToast.success('Se ha registrado correctamente al empleado.');

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

  function setPicture( value ) { setPictureField (value) }

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
              Cerrar
            </Button>,
            <Button disabled={loading} key="submit" type="primary"  onClick={handleOk}>
              Ingresar
            </Button>,
          ]}
        >
          <Spin spinning={loading}>
          <Formik
            initialValues={{ firstName: "", age: 20, newsletter: false }}
            render={()=> (
              <Form style={{paddingBottom: '40px'}}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item style={{ padding: '15px'}} label="Nombre" name="Nombre" >
                      <Input onChange={event => setNameField(event.target.value) } value={nameField} size={"large"} name="Name" placeholder="Ingresa el nombre" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ padding: '15px'}} label="Identificación" name="identification" >
                      <Input onChange={event => setDocumentField(event.target.value) } value={documentField} size={"large"} name="Document Number" placeholder="Ingresa la identificación" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ padding: '15px'}} label="Email" name="Email" >
                      <Input onChange={event => setEmailField(event.target.value) } value={emailField} size={"large"} name="Email" placeholder="Ingresa el email" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ padding: '15px'}} label="Teléfono" name="Cellphone" >
                      <Input onChange={event => setPhoneField(event.target.value) } value={phoneField} size={"large"} name="phone" placeholder="Ingresa el Teléfono" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ padding: '15px'}} label="Descripción del cargo" name="Description" >
                      <Input onChange={event => setDescriptionField(event.target.value) } value={descriptionField} size={"large"} name="description" placeholder="Ingresa la descripción" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ padding: '15px'}} label="Fotografía" name="picture" >
                      <ImageUploader setPicture={setPicture} ></ImageUploader>
                    </Form.Item>
                  </Col>


                </Row>

              </Form>

            )}

          />
          </Spin>



        </Modal>
    </div>
  )
}

export default ModalAddEmployee;
