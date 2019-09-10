import React from 'react';
import { Menu, Icon } from 'antd';



class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;

  }

  myFunction() {
    /*
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    */
  }

  componentDidMount() {
    //nClick={this.props.openMenu}
  }

  render () {
    return (
      <div className="topnav" id="myTopnav">
        <a onClick={this.props.openMenu} className="active">
          <Icon type="menu" />
        </a>
        <a className="navbaricon" href="#news">
          <Icon type="bell" />
        </a>
        <a className="navbaricon" href="#contact">
          <Icon type="user" />
        </a>

        <a className="icon" onClick={this.myFunction()} >
          <Icon type="menu" />
        </a>
      </div>

    );
  }
}

export default Navbar;
