import React, { useState, useEffect } from 'react'
import { Layout,Button, Input,
Breadcrumb, Icon, Typography,Spin,
Row, Col,Card } from 'antd';



import ReactSVG from 'react-svg';
import NotFound from '../../Dashboard/NotFound';

import Loading from '.././Loading';
import Divider from '.././Divider';

import {AxiosApiGet} from '../../../helpers/AxiosApi';

import { withTranslation } from 'react-i18next';

const { Title } = Typography;
const { Content } = Layout;


const Stats = ({ t, i18n } ) => {

  //Variables
  //var array = [ "hola", "adios"]
  //const[ productsList, setProductsList ] = useState( [] );
  //const[ loading , setLoading] = useState(true);


  return (

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle">  Estadísticas </Title>

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
                <span>Inicio</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Estadísticas</Breadcrumb.Item>
            </Breadcrumb>
            </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input size={"large"} allowClear  placeholder="Realizar una búsqueda" />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="section-btn" >

              </div>


            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Divider> </Divider>
              <div >

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

export default withTranslation() ( Stats ) ;

