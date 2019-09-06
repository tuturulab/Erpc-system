import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Card,Typography } from 'antd';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import './styles/dashboard.less';
import { relative } from 'path';

import { useTranslation } from 'react-i18next';
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

              <div id="overlay-nav" >
                <Title id="maintitle">Productos</Title>

                <Card bordered={false} id="card-content">
                    <p>
                    
                    </p>
                </Card>
              </div>

              <Content id="maincontent"
                style={{
                  padding: 24,
                  minHeight: 400
                }}
              >


              </Content>
            </Layout>
          </Layout>





    )
  }
}

export default Main;
