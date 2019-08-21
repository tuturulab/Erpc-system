import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={null}>
        Back Home
      </Button>
    }
  ></Result>
);

export default NoFoundPage;
