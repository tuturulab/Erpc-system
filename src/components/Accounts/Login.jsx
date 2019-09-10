import React from 'react';
import './Styles/Login.less';

import ReactSVG from  'react-svg'

import axios from 'axios';
import { Button } from 'antd';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user : '',
      password : '',
      loadingBtn : false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateInputValue = (evt) => {
    this.setState({
      user : evt.target.value
    });
  }

  updatePassword = (evt) => {
    this.setState({
      password : evt.target.value
    });
  }


  onSubmit = (e) => {
    
    e.preventDefault();

    this.setState({
      loadingBtn : true
    });

    var settings = {
      "email" : this.state.user,
      "password" : this.state.password,
      
      headers : {
          "Content-Type": "application/json",
          "Accept" : "application/json",
          "Origin": ""
        }

    }

    axios.post("localhost:3000/auth/login",settings)
    .then ( response => {
      if (response.status === 200) {

        this.setState({
          loadingBtn : false
        })

        localStorage.setItem('jwt', response.data.access_token);

        //this.LoadingBar.complete();

        this.props.history.push('/home');

        /* Seteamos el response json */
      } else {
        console.log(response);

        this.setState ({
          loading : false,
          loadingBtn : false
        })

      }

    })
    .catch( error => {
      console.log(error);

      this.setState ({
        loading : false,
        loadingBtn : false
      })

    });



  }

  render() {
    return(
      <div id="bodylogin" className="align">

        <div className="grid">
          
          <ReactSVG src="logo.svg" />

          <form method="POST"  className="form login">

            <div className="form__field">
              <label htmlFor="login__username">
             
                <span className="hidden">Username</span></label>
              <input style={{zIndex: '999'}} id="login__username" value={this.state.user} onChange={this.updateInputValue} type="text" name="username" className="form__input" placeholder="Username" required />
            </div>

            <div className="form__field">
              <label htmlFor="login__password">

                <span className="hidden">Password</span></label>
              <input style={{zIndex: '999'}} id="login__password" value={this.state.password} onChange={this.updatePassword } type="password" name="password" className="form__input" placeholder="Password" required />
            </div>

            <div className="form__field">
              <Button loading={this.state.loadingBtn} onClick={this.onSubmit} size={"large"} style={{width: '100%', position: 'relative', zIndex : '999'}} type="primary" >
                Loading
              </Button>
              
            </div>
      

          </form>

         

        </div>

        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    )
  }

}

export default Login;
