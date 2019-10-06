import React from 'react';
import { Card, Icon } from 'antd';
import { withTranslation } from 'react-i18next';

import './Styles/CardEmployees.less';

const employeesCard = ( {employee} ) => {
  return (
    <div>
      <Card id="card-employe" >
        <div id="profile-info">
          <img id="profile-image" src={"http://localhost:5001/images/" + employee.picture}></img>
        </div>

        <p id="name-card-employee"> {employee.name} </p>
        <p id="rol-card-employee"> <Icon type="phone" />  {employee.cellphone} </p>

        <p id="description-card-employee"> {employee.description} </p>
      </Card>


  </div>
  )
}

export default withTranslation() ( employeesCard ) ;
