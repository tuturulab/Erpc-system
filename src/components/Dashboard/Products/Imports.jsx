import React, { useState } from 'react'
import {  Layout,Button, Input, Breadcrumb, Icon, Typography, Row, Col,Card } from 'antd';


import NotFound from '../../Dashboard/NotFound'
import ReactSVG from 'react-svg'
const { Title } = Typography;
const { Content } = Layout;



const Imports = () => {

  //Variables
  //const[  ] = useState();

  return (

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle">Importaciones</Title>
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
              <Breadcrumb.Item>Pedidos</Breadcrumb.Item>
            </Breadcrumb>
            </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input size={"large"} allowClear  placeholder="Realizar una búsqueda" />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div style={{ textAlign: 'right'}}>
                <Button size={"large"} type="primary" icon="plus">Agregar</Button>
              </div>

            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <NotFound></NotFound>

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

export default Imports;
