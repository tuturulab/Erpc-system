import React, { useState, useEffect } from 'react';
import { Form, Input} from "@jbuschke/formik-antd";
import {Button,  InputNumber , Select , Modal, Row, Col, Table,  Checkbox} from 'antd';
import { Formik } from 'formik';

import ImageUploader from '../../../helpers/ImageUploader';

const { Option } = Select;


const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'cantidad',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
  }
];


const ModalAddSales = ( {text} ) => {

  const [ visible , setVisible] = useState(false);
  const [ vendidos , setVendidos ] = useState([]);


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
        title="Agregar una venta"
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
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item style={{ padding: '15px'}} label="Cliente" name="cliente" >
                    <Select size={"large"} style={{ width: '100%' }} >
                      <Option value="lucy">Lucy</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={8}  lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px'}} label="Producto" name="product" >
                    <Select size={"large"} style={{ width: '100%' }} >
                      <Option value="lucy">Lucy</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px'}} label="Stock" name="Stock" >
                    <InputNumber style={{width: '100%'}} min={1} max={10} disabled />
                  </Form.Item>
                </Col>

                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px', width: '100%' }} label="Agregar cantidad" name="Agregar" >
                    <InputNumber style={{width: '100%'}} min={1} max={10}/>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px', marginTop: '20px'}} label="" name="Stock" >
                    <Button type="primary"  >Agregar a la tabla</Button>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Table bordered columns={columns} dataSource={ vendidos } />
                </Col>




              </Row>

            </Form>
          )}
        />

      </Modal>
    </div>
  )
}

export default ModalAddSales;
