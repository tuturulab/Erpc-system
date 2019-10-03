import React, { useState, useEffect } from 'react';
import {Button, Modal, Row, Col,Icon, DatePicker, Spin } from 'antd';


import moment from 'moment';

import { Form, Input, InputNumber,  Checkbox } from "@jbuschke/formik-antd";
import { Formik } from "formik";

import {AxiosApiPost} from '../../../helpers/AxiosApi';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const ModalAddCalendar = ( {text} ) => {

  //States
  const [ visible , setVisible] = useState(false);
  const [ startDate, setStartDate ] = useState ( moment() );
  const [ endDate, setEndDate ] = useState ( moment().add(1, 'days') );

  const [ descriptionField, setDescription ] = useState("");
  const [ titleField, setTitle] = useState("");

  const [ loading, setLoading ] = useState (false);

  function handleOk () {
    PostApi();
  }

  function handleCancel () {
    setVisible(false);
  }

  function showModal () {
    setVisible(true);
  }


  //Call Api
  async function PostApi()  {
    setLoading(true);


    var params = {
      start : startDate,
      end : endDate,
      title : titleField,
      description: descriptionField
    }

    AxiosApiPost('api/calendar', params ).then ( response => {
      if (response.status === 200) {

        console.log(response);

        setVisible(false);

      } else {
        setLoading(false);
      }
    }).catch(function(error) {
      setLoading(false);
    });
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
          <Button key="submit" type="primary"  onClick={handleOk} >
            Ingresar
          </Button>,
        ]}
      >
        <Formik
          render={()=> (

            <Form style={{paddingBottom: '40px'}}>

              <Spin spinning={loading} indicator={antIcon} >

                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item style={{ padding: '15px'}} label="Titulo" name="Titulo" >
                      <Input onChange={event => setTitle(event.target.value) } value={titleField} size={"large"} name="title" placeholder="title" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ padding: '15px'}} label="Iniciar" name="Iniciar" >
                      <DatePicker size={"large"} value={ startDate } onChange={setStartDate } style={{width: '100%'}} showTime placeholder="Select Time"  />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ padding: '15px'}} label="Finalización" name="Finalización" >
                      <DatePicker size={"large"} onChange={setEndDate } value={ endDate }  style={{width: '100%'}} showTime placeholder="Select Time" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item style={{ padding: '15px'}} label="Descripción" name="Descripción" >
                    <Input value={descriptionField} onChange={event => setDescription(event.target.value) } size={"large"}  name="description" placeholder="Descripción" />
                    </Form.Item>
                  </Col>



                </Row>
              </Spin>

            </Form>
             )}
             />

      </Modal>
    </div>
  )
}



export default ModalAddCalendar;
