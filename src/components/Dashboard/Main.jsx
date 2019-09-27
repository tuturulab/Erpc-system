import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Card,Typography } from 'antd';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import './styles/dashboard.less';
import { relative } from 'path';

import Inventory from './Products/Inventory';
import Sells from './Products/Sells';
import Orders from './Products/Orders';
import Imports from './Products/Imports';
import Employees from './rrhh/Employees';

import MyFooter from './Footer';

import MessengerCustomerChat from 'react-messenger-customer-chat';

import { Route, Link, Switch} from "react-router-dom";


import { useTranslation } from 'react-i18next';
import Calendar from './Admin/Calendar';
const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Content, Sider } = Layout;



class Main extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = { collapsed: false, bodyExpanded : '230px' };
  }

  openMenu = () => {

    if (this.state.collapsed ) {
      this.setState ( { collapsed : false, bodyExpanded: '230px' });
    }else {
      this.setState ( { collapsed : true, bodyExpanded: '0px' });
    }

    this.setState({ collapsed: !this.state.collapsed });
    //this.state.collapsed ? 'menu-unfold' : 'menu-fold'
  }

  responsiveMenu = (param) => {
    if (param) {
      this.setState({ collapsed: true , bodyExpanded : '0px' });
    } else {
      this.setState ({collapsed : false, bodyExpanded : '230px'} )
    }
  }

  render() {


    return (

      <Layout>

        <Sidebar responsiveMenu = {this.responsiveMenu } open= {this.state.collapsed} > </Sidebar>
        <Layout id="mainbody" style={{ paddingLeft: this.state.bodyExpanded }} >
          <Navbar openMenu = {this.openMenu} >

          </Navbar>
            {/* Routes */}
            <Switch>
              <Route exact path={"/admin/inventario"} component={Inventory} />
              <Route exact path={"/admin/ventas"} component={Sells} />
              <Route exact path={"/admin/importacion"} component={Imports} />
              <Route exact path={"/admin/pedidos"} component={Orders} />
              <Route exact path={"/admin/empleados"} component={Employees} />


              <Route exact path={"/admin/calendario"} component={Calendar} />

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
