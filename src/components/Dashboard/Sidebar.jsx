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

  onBreakpointMenu=(broken) => {
    //console.log(this);
    this.props.responsiveMenu(broken);
  }

  onCollapseMenu = (collapsed, type) => {
    alert(collapsed, type);
  }

  render() {
    const { t } = this.props;

    return(
      <Sider width={230} collapsed={this.props.open} collapsible trigger={null} collapsedWidth="0" id="sidebar"  breakpoint="lg"  onBreakpoint={this.onBreakpointMenu}  >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                {t('products.title')}
              </span>
            }
          >
            <Menu.Item key="1">   {t('products.inventory.title')} <Link to="/admin/inventario"> </Link> </Menu.Item>
            <Menu.Item key="2"> {t('products.sales.title')} </Menu.Item>
            <Menu.Item key="3"> {t('products.imports.title')} </Menu.Item>
            <Menu.Item key="4"> {t('products.orders.title')} </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5"><div> <Link to="/admin/inventario"> option5 </Link> </div></Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default withTranslation() (Sidebar) ;
