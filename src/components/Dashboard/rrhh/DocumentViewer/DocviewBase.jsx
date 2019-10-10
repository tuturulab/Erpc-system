import * as React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default class DocViewBase extends React.PureComponent {
  rendereComplete(){

  }

  componentDidMount(){
    setTimeout(() => {
      this.rendereComplete();
    })
  }
}
