import React, { useState, useEffect } from 'react'
import { Layout,Button, Input,
Breadcrumb, Icon, Typography,Spin,
Row, Col,Card, Table } from 'antd';



import ReactSVG from 'react-svg';
import NotFound from '../../Dashboard/NotFound';

import Loading from '.././Loading';
import Divider from '.././Divider';

import {AxiosApiGet} from '../../../helpers/AxiosApi';

import ModalAddSales from './ModalAddSales';
import { withTranslation } from 'react-i18next';

const { Title } = Typography;
const { Content } = Layout;


const columns = [
  {
    title: 'Id',
    dataIndex: 'saleId',
    key: 'saleId',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cliente',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Fecha',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a target="_blank" href={"https://erpc-system-backend20191006012202.azurewebsites.net/api/receipt/"+record.saleId } > Factura </a>
      </span>
    ),
  }
];


const Sales = ({ t, i18n } ) => {

  //Variables
  //var array = [ "hola", "adios"]
  const[ salesList, setSalesList ] = useState( [] );
  const[ loading , setLoading] = useState(true);


  async function GetApi()  {
    AxiosApiGet('api/sales')
    .then ( response => {
      if (response.status === 200) {
        setSalesList (response.data);
        console.log(response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }).catch(e => {
      console.log(e);
    });
  }


  useEffect(() => {

    GetApi();

  }, [] );


  return (

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle">   {t('products.sales.title')} </Title>

        </div>

        <div className="wrapper">
          <Card bordered={false} id="card-content">

            <Col>
            <Breadcrumb style={{marginBottom: '20px'}}>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Productos</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Ventas</Breadcrumb.Item>
            </Breadcrumb>
            </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input size={"large"} allowClear  placeholder="Realizar una búsqueda" />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="section-btn" >

                <ModalAddSales complete={GetApi } text="Agregar una venta"> </ModalAddSales>
              </div>


            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Divider> </Divider>
              <div >
                {loading ?
                  <Loading> </Loading>
                  :

                  <div>
                    { (salesList.length > 0) ?
                      <div>
                        <Table columns={columns} dataSource={salesList} />
                      </div>


                      :
                      <NotFound> </NotFound>
                    }
                  </div>
                }

              </div>
            </Col>

          </Card>
        </div>
      </Col>

      {/*Extra Content */}
      <Content id="maincontent"
        style={{
          padding: 24,
          minHeight: 400
        }}
      >


      </Content>


    </Row>
  )
}

export default withTranslation() ( Sales ) ;

