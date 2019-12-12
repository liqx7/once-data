import React from 'react';
import { Descriptions } from 'antd';
// import DisplayRow from '@/components/DisplayRow';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { FormattedMessage } from 'umi-plugin-react/locale';
// import { Card, Typography, Alert } from 'antd';
// import styles from './Welcome.less';

class UserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      // title: 'calc',
    };
  }

  render() {
    // const { title } = this.state;
    const data = [
      { title: '基本信息', content: '' },
      { title: '当前项目', content: '' },
      { title: '角色权限', content: '' },
      { title: '项目列表', content: '' },
    ];

    return (
      <div>
        {/* <DisplayRow data={data} /> */}
        <Descriptions title="个人中心">
          {data.map(v => (
            <Descriptions.Item key={v.title} label={v.title}>
              {v.content}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>
    );
  }
}

export default UserCenter;
