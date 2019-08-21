import React, {Component} from 'react';
import { Menu, Icon } from 'antd';



class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;

  }


  componentDidMount() {

  }

  render () {
    return (
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
      >

        <Menu.Item onClick={this.props.openMenu} key="1">
          ERP

        </Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
