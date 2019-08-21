import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import './styles/dashboard.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { collapsed: false, bodyExpanded : '252px' };
  }

  openMenu = () => {

    if (this.state.collapsed ) {
      this.setState ( { collapsed : false, bodyExpanded: '254px' });
    }else {
      this.setState ( { collapsed : true, bodyExpanded: '24px' });
    }

    this.setState({ collapsed: !this.state.collapsed });
    //this.state.collapsed ? 'menu-unfold' : 'menu-fold'
  }

  responsiveMenu = (param) => {
    if (param) {
      this.setState({ collapsed: true , bodyExpanded : '24px' });
    } else {
      this.setState ({collapsed : false, bodyExpanded : '254px'} )
    }
  }

  render() {
    return (
      <div>
         <Layout>
          <Header className="header">
            <div className="logo" />
            <Navbar openMenu = {this.openMenu} > </Navbar>
          </Header>
          <Layout>
            <Sidebar responsiveMenu = {this.responsiveMenu } open= {this.state.collapsed} > </Sidebar>
            <Layout id="mainbody" style={{ paddingLeft: this.state.bodyExpanded }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content id="maincontent"
                style={{
                  background: '#fff',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>



      </div>
    )
  }
}

export default Main;
