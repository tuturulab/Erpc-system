import React, { useState, useEffect } from 'react'
import { Layout,Button, Input,
Breadcrumb, Icon, Typography,Spin,
Row, Col,Card } from 'antd';


import ReactSVG from 'react-svg';
import NotFound from '../../Dashboard/NotFound';

import Moment from 'moment';

import Loading from '.././Loading';
import Divider from '.././Divider';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './ScrumManager.scss';

import {AxiosApiGet} from '../../../helpers/AxiosApi';

import { withTranslation } from 'react-i18next';


const { Title } = Typography;
const { Content } = Layout;


const ScrumManager = ({ t, i18n } ) => {


  const initialDate = Moment().format("M") + "-" + Moment().format("Y");
  //const[ productsList, setProductsList ] = useState( [] );
  const[ loading , setLoading] = useState(false);
  const[ dates , setDates ] = useState( [
      {
        title: 'Calendarización de operaciones',
        description : 'Tarea ejecutada',
        start: '2019-09-25T21:00:00',
        end: '2019-09-25T03:00:00'
      }
    ]
  );

  const[ selectedDate , setSelectedDate ] = useState ( initialDate );

  const calendarRef = React.createRef();

  useEffect(() => {

    GetApi();

  }, [] );

  //When a date is rendered in the Full Calendar
  function handleDate () {

    if (calendarRef.current !== null ) {
      let calendarApi = calendarRef.current.getApi() ;

      var originalDate = Moment(calendarApi.getDate()) ;

      let date = originalDate.format("M") + "-" + originalDate.format("Y");

      //console.log( date );

      setSelectedDate (date);
    }

    GetApi();

    //setLoading ( true);
  }


  //Call Api
  async function GetApi()  {
    //setLoading(true);

    AxiosApiGet('api/scrum/date?='+selectedDate ).then ( response => {
      if (response.status === 200) {
        setDates (response.data);
        //console.log(response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    })
  }

  return (

    <Row>

      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div id="overlay-nav" >
          <Title id="maintitle">   {t('admin.calendar.title')} </Title>

        </div>

        <div className="wrapper">
          <Card bordered={false} id="card-content">

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>

            <Breadcrumb style={{marginBottom: '20px'}}>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Administración</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Scrum Manager</Breadcrumb.Item>
            </Breadcrumb>


          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="section-btn" >


            </div>
          </Col>

            {/* Main Content*/}
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>

            </Col>

            <Col xs={24} sm={24} md={4} lg={4} xl={4}>

            </Col>

            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <div className="section-btn" >


              </div>


            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Divider> </Divider>
              <div >
                {loading ?
                  <Loading> </Loading>
                  :

                  <div>
                    <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2011 - present"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                      <h3 className="vertical-timeline-element-title">Creative Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2010 - 2011"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                      <h3 className="vertical-timeline-element-title">Art Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                      </p>
                    </VerticalTimelineElement>
                    </VerticalTimeline>
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

export default withTranslation() ( ScrumManager ) ;

