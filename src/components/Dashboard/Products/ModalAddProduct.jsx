import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber } from "@jbuschke/formik-antd";
import {Button, Modal, Row, Col,  Checkbox} from 'antd';
import { Formik } from 'formik';

import cogoToast from 'cogo-toast';

import ImageUploader from '../../../helpers/ImageUploader';

import {AxiosFormData} from '../../../helpers/AxiosApi';

const { Option } = Select;

const ModalAddProduct = ( {text, complete } ) => {

  const [ visible , setVisible] = useState(false);
  const [ loading, setLoading ] = useState(false);

  //Fields
  const [ nameField, setNameField ] = useState ( "" );
  const [ priceField , setPriceField ] = useState ( "" );
  const [ descriptionField , setDescriptionField ] = useState("");
  const [ minStockField, setMinStockField ] = useState( "" );
  const [ stockField, setStockField ] = useState( "" );
  const [ pictureField , setPictureField ] = useState ( "" );
  const [ ecommerce, setEcommerce ] = useState ( true );



  //Call Api
  async function PostApi()  {
    setLoading(true);

    //Send data as FORMDATA
    let formData = new FormData();

    if (pictureField !== null || pictureField !== "")
      formData.append("Picture", pictureField );

    formData.append("Name", nameField );
    formData.append("Price", priceField );
    formData.append("Description", descriptionField );
    formData.append("Stock", stockField );
    formData.append("MinStock", minStockField );
    formData.append("Ecommerce", ecommerce );

    AxiosFormData('api/product', formData )
    .then ( response => {
      if (response.status === 200) {

        console.log(response);

        complete();

        setLoading(false);
        setVisible(false);

        cogoToast.success('Se ha registrado correctamente el producto.');

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
                {ecommerce}
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item style={{ padding: '15px'}} label="Nombre" name="Nombre" >
                    <Input onChange={event => setNameField(event.target.value) } value={nameField} size={"large"} name="name" placeholder="name" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Precio" name="price" >
                    <Input onChange={event => setPriceField(event.target.value) } value={priceField} size={"large"} name="price" placeholder="price" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Descripción" name="description" >
                    <Input onChange={event => setDescriptionField(event.target.value) } value={descriptionField} size={"large"} name="price" placeholder="price" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Stock" name="Stock" >
                    <Input onChange={event => setStockField(event.target.value) } value={stockField} size={"large"} name="stock" placeholder="stock" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Stock Mínimo" name="Stock" >
                  <Input onChange={event => setMinStockField(event.target.value) } value={minStockField} size={"large"} name="stock" placeholder="Stock Mínimo" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Ecommerce" name="Stock" >
                    <Checkbox value={ecommerce} onChange={event => setEcommerce(event.target.value) } style={{fontSize: '1rem', paddingTop: '10px'}}>Permitir Ecommerce</Checkbox>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item style={{ padding: '15px'}} label="Fotografía" name="picture" >
                    <ImageUploader setPicture={setPicture} ></ImageUploader>
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

export default ModalAddProduct;
