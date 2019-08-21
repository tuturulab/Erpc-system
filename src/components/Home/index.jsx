import React from 'react';
import { Card, Col, Row } from 'antd';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import './static/style';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


const About = () => (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);

const NotF = () => (
  <div>
    <h1>Not found!</h1>
  </div>
);


const SwitcherNav = ({ match, state }) => {
  let component;
  let value;

  //Verificar el match
  if(typeof match.params.id === 'undefined'){
    value = match.path;
  } else {
    value = match.params.id;
  }

  //Si viene del path, remover la /
  if(value.charAt(0) === '/'){
    value = value.substr(1);
  }

  switch(value){
    case "about":
      return <About />;
    case "home":
      return <div><Banner isMobile={state.isMobile} navToShadow={this.navToShadow} />
      <Page1 isMobile={state.isMobile} />
      <Page2 isMobile={state.isMobile} />
      <Page3 isMobile={state.isMobile} />
      <Page4 key="page4" /></div>;
  }
  return component;
}

const Switcher2 = ({ match }) => {
  let component;

  switch(match.params.id){
    case "about":
      component = <About />;
      break;
    default:
      component = <NotF />;
  }

  return component;
}

class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
    isHome: true,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }

  /*<Banner isMobile={this.state.isMobile} navToShadow={this.navToShadow} />
  <Page1 isMobile={this.state.isMobile} />
  <Page2 isMobile={this.state.isMobile} />
  <Page3 isMobile={this.state.isMobile} />
  <Page4 key="page4" />*/

  render() {

    const { match } = this.props;

    return (
      <div>
        <DocumentTitle title="ERP - TUTURU LABS" />
        <Header className={this.state.showShadow ? 'show-shadow' : ''} />
        <Banner isMobile={this.state.isMobile} navToShadow={this.navToShadow} />

        {this.state.isHome ? <div>
          <Page1 isMobile={this.state.isMobile} />
          <Page2 isMobile={this.state.isMobile} />
          <Page3 isMobile={this.state.isMobile} />
          <Page4 key="page4" /></div> : <div></div>}

        {/*<SwitcherNav match={match} state={this.state} />*/}

        <Route path="/home/:id" render={(props) => {
          this.setState({isHome: false});
          return <Switcher2 {...props} />;
        }} />

        <Footer key="footer" />
      </div>
    );
  }
}
export default Home;
