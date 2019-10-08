import React from 'react';
import { Card } from 'antd';
import { withTranslation } from 'react-i18next';

import { Icon } from 'antd';
import { QRCode } from 'react-qrcode-logo';
import { Barcode  } from 'react-barcode';



import './styles/CardProduct.less';

const ProductCard = ({ Product }) => {
  return (
    <div>
      <div className="wrapper-card-product">
        <div className="container">
          <div style={{ backgroundImage: "url(http://localhost:5001/images/" + Product.picture + ")" }} className="top"></div>
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
            <QRCode logoWidth	= "80" logoImage={require('../../../assets/logo512.png')}  value={"http://localhost:5001/marketplace/" + Product.productId} />
            <Barcode value="http://github.com/kciter" />
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default withTranslation()(ProductCard);
