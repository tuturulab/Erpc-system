import React from 'react';
import { Card } from 'antd';
import { withTranslation } from 'react-i18next';

import { Icon } from 'antd';

import './styles/CardProduct.less';

const ProductCard = ( {Product} ) => {
  return (
    <div>
      <div class="wrapper-card-product">
      <div class="container">
        <div class="top"></div>
        <div class="bottom">
          <div class="left">
            <div class="details">
              <h1> {Product.name } </h1>
              <p> {Product.price} </p>
            </div>
            <div class="buy"> <Icon type="login" /> </div>
          </div>
          <div class="right">
            <div class="done"><i class="material-icons">done</i></div>
            <div class="details">
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div class="remove"><i class="material-icons">clear</i></div>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon"><Icon type="info" style={{ fontSize: '25px', color: '#fff' }} /></div>
        <div class="contents">
          <table>
            <tr>
              <th>Width</th>
              <th>Height</th>
            </tr>
            <tr>
              <td>3000mm</td>
              <td>4000mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  </div>
  )
}

export default withTranslation() ( ProductCard ) ;
