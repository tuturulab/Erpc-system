import React, { useState, useEffect } from 'react'
import { Layout,Button, Input,
Breadcrumb, Icon, Typography,Spin,
Row, Col,Card } from 'antd';

import { Link } from 'react-router-dom';

import ReactSVG from 'react-svg';
import NotFound from '../../Dashboard/NotFound';

import Loading from '.././Loading';
import Divider from '.././Divider';

import { withTranslation } from 'react-i18next';
import ModalAddEmployee from './AddEmployee';

import './Styles/CardEmployees.less';

const { Title } = Typography;
const { Content } = Layout;

const DocumentCard = () => {
  return(
    <Card id="card-employe" >
      <div id="profile-info">
        <img id="profile-image" src={"https://cdn2.iconfinder.com/data/icons/flat-file-types-1-1/300/icon_file-DOC_plano-512.png"} ></img>
      </div>

      <p id="name-card-employee"> Plantilla de evaluacion </p>
      <p id="rol-card-employee"> <Icon type="phone" /> Modelo 1</p>

      <p id="description-card-employee"> Siguiendo metodologia europea </p>
      <Button><Link to="/admin/documentEditor">Ver</Link></Button>
    </Card>
  );
}


const Perfomance = ({ t, i18n } ) => {

  return (

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle">Rendimiento de empleados</Title>

        </div>

        <div className="wrapper">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>

          <Card bordered={false} id="card-content">

            <Col>
            <Breadcrumb style={{marginBottom: '20px'}}>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span> Utils </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Editor de Documentos</Breadcrumb.Item>
            </Breadcrumb>
            </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input size={"large"} allowClear  placeholder="Realizar una búsqueda" />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="section-btn" >

                <p>New</p>
              </div>


            </Col>

            <Col xs={24} sm={24} md={24} lg={242} xl={24}>


            </Col>

          </Card>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div >
              <Col style={{textAlign: 'center', paddingLeft: '10px', paddingRight: '10px' }} xs={24} sm={24} md={8} lg={8} xl={8}>
                <DocumentCard />
              </Col>
            </div>
          </Col>
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

export default withTranslation() ( Perfomance ) ;
