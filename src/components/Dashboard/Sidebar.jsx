import React,{Component} from 'react';

import { Menu, Icon, Layout } from 'antd';

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
                Productos
              </span>
            }
          >
            <Menu.Item key="1">Inventario</Menu.Item>
            <Menu.Item key="2">Ventas</Menu.Item>
            <Menu.Item key="3">Importación</Menu.Item>
            <Menu.Item key="4">Ped</Menu.Item>
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
            <Menu.Item key="5">option5</Menu.Item>
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

export default Sidebar;