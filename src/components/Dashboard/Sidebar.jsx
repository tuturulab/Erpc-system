import React,{Component} from 'react';

import { Menu, Icon, Layout } from 'antd';

import { Route, Link} from "react-router-dom";

import { withTranslation } from 'react-i18next';

const { SubMenu } = Menu;
const { Sider } = Layout;


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  onCollapseMenu = (collapsed, type) => {
    alert(collapsed, type);
  }

  render() {
    const { t } = this.props;

    return(
      <Sider style={{zIndex : '9999'}} width={230} collapsed={this.props.open} collapsible trigger={null} collapsedWidth="0" id="sidebar"  breakpoint="lg"  onBreakpoint={this.props.onBreakpointMenu}  >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1', 'sub2', 'sub3']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="container" />
                {t('products.title')}
              </span>
            }
          >
            <Menu.Item key="1">   {t('products.inventory.title')} <Link to="/admin/inventario"> </Link> </Menu.Item>
            {/*<Menu.Item key="2"> {t('products.sales.title')} </Menu.Item>*/}
            {/*<Menu.Item key="3"> {t('products.imports.title')} </Menu.Item>*/}
            {/*<Menu.Item key="4"> {t('products.orders.title')} </Menu.Item>*/}
            <Menu.Item key="2"> {t('products.clients.title')} <Link to="/admin/clientes"> </Link> </Menu.Item>
            <Menu.Item key="4"> {t('products.sales.title')} <Link to="/admin/ventas"> </Link> </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                {t('rrhh.title')}
              </span>
            }
          >
            <Menu.Item key="6"> {t('rrhh.employees.title')} <Link to="/admin/empleados">  </Link> </Menu.Item>
           
            <Menu.Item key="8"> {t('rrhh.qual.title')} <Link to="/admin/calificacion">  </Link> </Menu.Item>
           
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="pie-chart" />
                {t('admin.title')}
              </span>
            }
          >
            <Menu.Item key="10"> {t('admin.calendar.title')} <Link to="/admin/calendario">  </Link> </Menu.Item>
            <Menu.Item key="11"> {t('admin.scrum.title')} <Link to="/admin/scrum">  </Link> </Menu.Item>


          </SubMenu>

        </Menu>
      </Sider>
    )
  }
}

export default withTranslation() (Sidebar) ;
