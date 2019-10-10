import React from 'react';
import { Card } from 'antd';
import { withTranslation } from 'react-i18next';

import { Icon } from 'antd';
import { QRCode } from 'react-qrcode-logo';



import './styles/CardProduct.less';

//var Barcode = require('react-barcode');
import Barcode from 'react-barcode';

const ProductCard = ({ Product }) => {
  return (
    <div>
      <div className="wrapper-card-product">
        <div className="container">
          <div style={{ backgroundImage: "url(https://erpc-system-backend20191006012202.azurewebsites.net/images/" + Product.picture + ")" }} className="top"></div>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h1> {Product.name} </h1>
                <p> {Product.price} </p>
              </div>
              <div className="buy"> <Icon type="login" />

              </div>
              
            </div>
            <div className="right">
              <div className="done"><i className="material-icons">done</i></div>
              <div className="details">
                <h1>Chair</h1>
                <p>Added to your cart</p>
              </div>
              <div className="remove"><i className="material-icons">clear</i></div>
            </div>
          </div>
        </div>
     
        <div className="inside">
          <div className="icon"><Icon type="info" style={{ fontSize: '25px', color: '#fff' }} /></div>
          <div className="contents">
            <p> {Product.description} </p>
            <QRCode id={Product.productId} logoWidth	= "75" size = "225" logoImage={require('../../../assets/logo512.png')}  value={"https://wonderful-swanson-9eeb3c.netlify.com/marketplace/" + Product.productId} />
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default withTranslation()(ProductCard);
