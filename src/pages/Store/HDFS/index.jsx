import React from 'react';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { FormattedMessage } from 'umi-plugin-react/locale';
// import { Card, Typography, Alert } from 'antd';
// import styles from './Welcome.less';

class Calc extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'calc',
    };
  }

  render() {
    const { title } = this.state;
    return <div>{title}</div>;
  }
}

export default Calc;
