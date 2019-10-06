import React from 'react';
import { css } from '@emotion/core';

import {Icon, Spin } from 'antd';
import DotLoader from 'react-spinners/DotLoader';

const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />;

const override = css`


    border-color: yellow;
    position: absolute;
    left: 0;
    top: 0;
    bottom : 0;
    right: 0;
    margin: auto;
`;

const Loading = () => {
  return(

    <div style={{height: '400px', position: 'relative', overflowY: 'hidden' }} className='sweet-loading'>
        <DotLoader
          css={override}
          sizeUnit={"px"}
          size={80}
          color={'#28BEBD'}

        />
    </div>


  )
}

export default Loading;
