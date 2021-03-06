import React, { useState, useEffect } from 'react'
import { Layout,Button, Input,
Breadcrumb, Icon, Typography,Spin,
Row, Col,Card } from 'antd';

import EmployeesCard from './employeesCard';


import ReactSVG from 'react-svg';
import NotFound from '../../Dashboard/NotFound';

import Loading from '.././Loading';
import Divider from '.././Divider';

import {AxiosApiGet} from '../../../helpers/AxiosApi';

import { withTranslation } from 'react-i18next';
import ModalAddEmployee from './AddEmployee';

const { Title } = Typography;
const { Content } = Layout;


const Employees = ({ t, i18n } ) => {

  const[ employeesList, setEemployeesList ] = useState( [] );
  const[ loading , setLoading] = useState(true);

  async function GetApi()  {
    AxiosApiGet('api/employee')
    .then ( response => {
      if (response.status === 200) {
        setEemployeesList (response.data);
        console.log(response.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    })
  }


  useEffect(() => {

    GetApi();

  },[] );



  return (

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle">   {t('rrhh.employees.title')} </Title>

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
                <span> {t('rrhh.title')} </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item> {t('rrhh.employees.title')} </Breadcrumb.Item>
            </Breadcrumb>
            </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input size={"large"} allowClear  placeholder="Realizar una búsqueda" />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="section-btn" >

                <ModalAddEmployee complete={GetApi} text="Agregar empleado"></ModalAddEmployee>
              </div>


            </Col>

            <Col xs={24} sm={24} md={24} lg={242} xl={24}>


            </Col>

          </Card>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>

            <div >
              {loading ?
                <Loading> </Loading>
                :

                <div>
                  { (employeesList.length > 0) ?
                    <div>
                      {employeesList.map(employee =>
                        <Col style={{textAlign: 'center', paddingLeft: '10px', paddingRight: '10px' }} xs={24} sm={24} md={8} lg={8} xl={8}>
                          <EmployeesCard employee={employee} ></EmployeesCard>
                        </Col>
                      )}
                    </div>


                    :
                    <NotFound> </NotFound>
                  }
                </div>
              }

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

export default withTranslation() ( Employees ) ;
