import React, { useState, useEffect } from 'react'
import { Layout,Button, Input,
Breadcrumb, Icon, Typography,Spin,
Row, Col,Card, Table } from 'antd';



import ReactSVG from 'react-svg';
import NotFound from '../../Dashboard/NotFound';

import Loading from '.././Loading';
import Divider from '.././Divider';

import CardProduct from './ProductCard';
import {AxiosApiGet} from '../../../helpers/AxiosApi';

import ModalAddSales from './ModalAddSales';
import { withTranslation } from 'react-i18next';
import ModalAddClient from './AddClient';

const { Title } = Typography;
const { Content } = Layout;


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Identificación',
    dataIndex: 'document',
    key: 'document',
  },
  {
    title: 'Teléfono',
    dataIndex: 'cellphone',
    key: 'cellphone',
  }
];


const Clients = ({ t, i18n } ) => {

  //Variables
  //var array = [ "hola", "adios"]
  const[ clientsList, setClientsList ] = useState( [] );
  const[ loading , setLoading] = useState(true);


  async function GetApi()  {
    AxiosApiGet('api/customer')
    .then ( response => {
      if (response.status === 200) {
        setClientsList (response.data);
        console.log(response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    })
  }


  useEffect(() => {

    GetApi();

  }, [] );


  return (

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle"> Clientes </Title>

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
                <span>RRHH</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Clientes</Breadcrumb.Item>
            </Breadcrumb>
            </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input size={"large"} allowClear  placeholder="Realizar una búsqueda" />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="section-btn" >

                <ModalAddClient complete={GetApi} text="Agregar un cliente"> </ModalAddClient>
              </div>


            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Divider> </Divider>
              <div >
                {loading ?
                  <Loading> </Loading>
                  :

                  <div>
                    { (clientsList.length > 0) ?
                      <div>
                        <Table bordered columns={columns} dataSource={clientsList} />
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

export default withTranslation() ( Clients ) ;

