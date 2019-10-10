import React, { useState, useEffect } from 'react';
import { Form, Input} from "@jbuschke/formik-antd";
import {Button, Spin, InputNumber , Select , Modal, Row, Col, Table,  Checkbox} from 'antd';
import { Formik } from 'formik';

import ImageUploader from '../../../helpers/ImageUploader';

import {AxiosApiGet, AxiosApiPost} from '../../../helpers/AxiosApi';

import cogoToast from 'cogo-toast';

import axios from 'axios';

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


const ModalAddSales = ( {text, complete} ) => {

  const [ visible , setVisible] = useState(false);
  const [ vendidos , setVendidos ] = useState([]);
  const [ listClientes , setListClientes ] = useState ([]);
  const [ listProductos, setListProductos ] = useState ([]);
  const [ listVendidos , setListVendidos ] = useState ([]);
  const [ productSelected , setProductSelected ] = useState(null);

  const [ stockField, setStockField ] = useState (1);

  const [ stockMax , setStockMax ] = useState ( 0 );

  const [ stockDisponible , setStockDisponible ] = useState( 0 );

  const [ barcodeField , setBarcodeField ] = useState("");

  const[ loading , setLoading ] = useState(true);

  const [ productIdSelected , setProductIdSelected ] = useState (0);

  const [ clientSelected , setClientSelected ] = useState ( 0);


  useEffect(() => {

    getData();

  }, [] );


  function handleOk () {
    setLoading(true);

    //Send data as FORMDATA
    var formData = {

      "Type" : "Contado",
      "CustomerId" : clientSelected,

      "ProductsBought" : listVendidos

    };

    AxiosApiPost('api/sales', formData )
    .then ( response => {
      if (response.status === 200) {

        console.log(response);
        complete();

        setLoading(false);
        setVisible(false);



        cogoToast.success('Se ha registrado correctamente la venta');

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

  function handleCancel () {
    setVisible(false);
  }

  async function handleChange( id ) {
    //console.log(id ); // { key: "lucy", label: "Lucy (101)" }

    var object = await listProductos.find(x => x.productId === id) ;
    //console.log(object);

    if (object !== null && object !== undefined )
    {
      console.log("im here");
      setProductSelected (object);

      //console.log(object);

      setStockDisponible (object.stock );

      setStockMax ( object.stock ) ;

      setProductIdSelected ( id);
    }


  }


  function showModal () {
    setVisible(true);
  }

  function handleClick () {

    var value = {
      "id" : productIdSelected,
      "name" : productSelected.name,
      "stock" :  stockField ,
      "price" : productSelected.price
    }
    //Eliminamos el input

    const temp = [...listProductos ];

    //console.log(productIdSelected);
    var object =  temp.find(x => x.productId === productIdSelected) ;

    var index =  temp.findIndex( x => x.productId === productIdSelected  );

    temp.splice ( index , 1 );

    setListProductos(temp);

    setListVendidos(oldArray => [...oldArray, value] );
    setProductIdSelected(null);
    setProductSelected(null);
  }

  async function getData () {
    AxiosApiGet('api/customer')
    .then ( response => {
      if (response.status === 200) {
        setListClientes (response.data);
        console.log("hola mundo");
        //setLoading(false);

        AxiosApiGet('api/product')
        .then ( response2 => {
          if (response2.status === 200) {
            setListProductos (response2.data);
            console.log(response2);


            setLoading(false);
          } else {
            //setLoading(false);
          }
        })


      } else {
        setLoading(false);
      }
    })
  }

  function handleChangeInput (value ) {
    setStockField(value);
  }

  function handleChangeClient ( value ) {
    setClientSelected ( value);
  }


  function handleBarcode ( id ) {
    setBarcodeField(id.target.value);

    console.log(id.target.value);

    handleChange(parseInt(  id.target.value )  );

    //var encount = listProductos.find(x => x.productId === parseInt(id.target.value) ) ;
    //console.log(encount);

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
            <Spin spinning={loading} >
            <Form style={{paddingBottom: '40px'}}>
              <Row>
                <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                  <Form.Item style={{ padding: '15px'}} label="Cliente" name="cliente" >
                    <Select  value={clientSelected} onChange={handleChangeClient} size={"large"} style={{ width: '100%' }} >
                      {listClientes.map((item, index) => (
                        <Option key={item.customerId} value={item.customerId} > {item.name} </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={8}  lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px'}} label="Producto" name="product" >
                    <Select value={productIdSelected} onChange={handleChange} size={"large"} style={{ width: '100%' }} >

                    {listProductos.map((item, index) => (
                      <Option key={item.productId} value={item.productId} > {item.name} </Option>
                    ))}

                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Form.Item style={{ padding: '15px'}} label="Barcode" name="barcode" >
                    <Input onChange={ handleBarcode } value={barcodeField} size={"large"} name="name" placeholder="Usar Scanner" />
                  </Form.Item>
                </Col>

                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px'}} label="Stock" name="Stock" >
                    <InputNumber value={stockDisponible} style={{width: '100%'}} disabled />
                  </Form.Item>
                </Col>

                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px', width: '100%' }} label="Agregar cantidad" name="Agregar" >
                    <InputNumber value={stockField} onChange={ handleChangeInput  }  style={{width: '100%'}} min={1} max={ stockMax }/>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Form.Item style={{ padding: '15px', marginTop: '20px'}} label="" name="Stock" >
                    <Button disabled={ productSelected !== null ? false : true } onClick={handleClick} type="primary"  >Agregar a la tabla</Button>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Table bordered columns={columns} dataSource={ listVendidos } />
                </Col>




              </Row>

            </Form>
            </Spin>
          )}
        />

      </Modal>
    </div>
  )
}

export default ModalAddSales;
