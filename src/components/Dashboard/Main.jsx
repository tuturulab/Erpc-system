import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Card,Typography } from 'antd';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import './styles/dashboard.less';
import { relative } from 'path';

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
                      What is Lorem Ipsum?

                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                          What is Lorem Ipsum?

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

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
