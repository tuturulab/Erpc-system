import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Card,Typography } from 'antd';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import './styles/dashboard.less';
import { relative } from 'path';

import Inventory from './Products/Inventory';
import PdfViewer from './Products/PdfViewer';
import Sells from './Products/Sells';
import Orders from './Products/Orders';
import Imports from './Products/Imports';
import Employees from './rrhh/Employees';

import MyFooter from './Footer';

import MessengerCustomerChat from 'react-messenger-customer-chat';

import { Route, Link, Switch} from "react-router-dom";


import { useTranslation } from 'react-i18next';
import Calendar from './Admin/Calendar';
import ScrumManager from './Admin/ScrumManager';
import Stats from './Stats/Stats';
const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Content, Sider } = Layout;



class Main extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = { collapsed: false, bodyExpanded : '230px', mobile : false, navbarExpanded : '16px' };
  }

  openMenu = () => {

    if (this.state.collapsed ) {

      if (this.state.mobile === true )
        this.setState ({collapsed : false, bodyExpanded : '0px', navbarExpanded : '246px' } )
      else
        this.setState ({collapsed : false, bodyExpanded : '230px', navbarExpanded : '16px'} )
    }else {
      this.setState ( { collapsed : true, bodyExpanded: '0px', navbarExpanded : '16px' });
    }

    this.setState({ collapsed: !this.state.collapsed });
    //this.state.collapsed ? 'menu-unfold' : 'menu-fold'
  }



  onBreakpointMenu=(broken) => {

    if (broken == true) {
      this.setState({ mobile : true }, () => {
        if (this.state.collapsed ) {
          this.setState({collapsed : false}, () => { this.openMenu();} )

        }
      })
    } else {
      this.setState({ mobile : false }, () => {

        if (!this.state.collapsed ) {
          this.setState({collapsed : true}, () => { this.openMenu();} )

        }
      });
    }

    if (!this.state.collapsed ) {
      this.setState({collapsed : true}, () => { this.openMenu();} )

    }


  }

  render() {


    return (

      <Layout>

        <Sidebar onBreakpointMenu={this.onBreakpointMenu} open= {this.state.collapsed} > </Sidebar>
        <Layout id="mainbody" style={{ paddingLeft: this.state.bodyExpanded }} >
          <Navbar marginLeft={this.state.navbarExpanded } openMenu = {this.openMenu} >

          </Navbar>
            {/* Routes */}
            <Switch>
              <Route exact path={"/admin/"} component={Stats} />


              <Route exact path={"/admin/inventario"} component={Inventory} />
              <Route exact path={"/admin/pdfviewer"} component={PdfViewer} />
              <Route exact path={"/admin/ventas"} component={Sells} />
              <Route exact path={"/admin/importacion"} component={Imports} />
              <Route exact path={"/admin/pedidos"} component={Orders} />
              <Route exact path={"/admin/empleados"} component={Employees} />


              <Route exact path={"/admin/calendario"} component={Calendar} />

              <Route exact path={"/admin/scrum"} component={ScrumManager} />

            </Switch>
            {/*EndRoutes*/}

        </Layout>

        <MessengerCustomerChat
          pageId="111138870281650"
          appId="1678638095724206"
        />


      </Layout>
    )
  }
}

export default Main;
