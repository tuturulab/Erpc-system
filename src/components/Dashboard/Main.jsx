import React from 'react';



import Navbar from './Navbar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

  }

  render() {
    return (
      <div>
        <Navbar></Navbar>


      </div>
    )
  }
}

export default Main;
