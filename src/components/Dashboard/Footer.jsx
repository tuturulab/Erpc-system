import React from 'react';

import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const footer = () => {
  return(
    <Footer className="footer">
      <Row>
        <Col id="footer-left" xs={24} sm={24} md={12} lg={12} xl={12}>
          <h3>Desarrollado por Tuturu Labs </h3>

        </Col>

        <Col id="footer-right" xs={24} sm={24} md={12} lg={12} xl={12}>
          <h3>Managua, Nicaragua</h3>

        </Col>

      </Row>
    </Footer>
  )
}

export default footer;