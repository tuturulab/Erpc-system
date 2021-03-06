import React, { useState, useEffect } from 'react'
import { Layout,Button, Input,
Breadcrumb, Icon, Typography,Spin,
Row, Col,Card } from 'antd';


import ReactSVG from 'react-svg';
import NotFound from '../../Dashboard/NotFound';

import Moment from 'moment';

import Loading from '.././Loading';
import Divider from '.././Divider';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './Calendar.scss';

import {AxiosApiGet} from '../../../helpers/AxiosApi';

import { withTranslation } from 'react-i18next';
import ModalAddCalendar from './AddCalendar';
import ReactTooltip from 'react-tooltip';

const { Title } = Typography;
const { Content } = Layout;


const Calendar = ({ t, i18n } ) => {


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

  /*function handleDate () {

  if (calendarRef.current !== null  ) {
    let calendarApi = calendarRef.current.getApi() ;

    var originalDate = Moment(calendarApi.getDate()) ;

    console.log(originalDate);

    let date = originalDate.format("M") + "-" + originalDate.format("Y");

    //console.log( date );
    if (date !== selectedDate)  {
      setSelectedDate (date);

      GetApi();
    }


  }

  //setLoading ( true);
  }
  */


  //Call Api
  async function GetApi()  {
    setLoading(true);

    AxiosApiGet('api/calendar').then ( response => {
      if (response.status === 200) {
        setDates (response.data);
        console.log(response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    })
  }

  function handleEventPositioned(event) {
    //console.log("im here");
    //console.log(event);

    //console.log(event);
    event.el.setAttribute("data-tip",event.event._def.extendedProps.description);
    ReactTooltip.rebuild();
  }

  return (

    <Row>
      <ReactTooltip />
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
              <Breadcrumb.Item>Calendario</Breadcrumb.Item>
            </Breadcrumb>


          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="section-btn" >
              <ModalAddCalendar complete={GetApi} text={"Agregar un Evento"} ></ModalAddCalendar>

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
                    <FullCalendar
                      ref={calendarRef}
                      events={ dates }
                      //eventRender={handleEventPositioned}
                      eventPositioned={handleEventPositioned}
                      defaultView="dayGridMonth"
                      plugins={[ dayGridPlugin ]} />
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

export default withTranslation() ( Calendar ) ;

