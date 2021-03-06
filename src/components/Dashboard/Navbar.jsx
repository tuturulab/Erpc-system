import React from 'react';
import { Menu, Icon, Modal } from 'antd';



class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      modalVisible : false
    }
  }

  handleOk = () => {
    this.setState({
      modalVisible : false
    })
  }

  handleCancel = () => {
    this.setState({
      modalVisible : false
    })
  }

  openModal = () => {
    this.setState({
      modalVisible : true
    });
  }


  componentDidMount() {
    //nClick={this.props.openMenu}
  }

  render () {
    return (
      <div>
        <Modal
            title="Language"
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>


        <div className="topnav" id="myTopnav">
          <a style={{paddingLeft: this.props.marginLeft,   transition: 'all 0.2s' }} onClick={this.props.openMenu} className="active">
            <Icon type="menu" />
          </a>
          <a className="navbaricon" href="#news">
            <Icon type="bell" />
          </a>
          <a className="navbaricon" onClick={this.openModal} href="#contact">
            <Icon type="setting" />
          </a>

          <a className="icon" onClick={this.openModal} >
            <Icon type="setting" />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
