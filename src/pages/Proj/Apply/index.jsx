import React from 'react';
import { Table, Divider, Tag, Modal, Button } from 'antd';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { FormattedMessage } from 'umi-plugin-react/locale';
// import { Card, Typography, Alert } from 'antd';
// import styles from './Welcome.less';

class Role extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  trigger = () => {
    this.setState({ visible: true });
  };

  render() {
    const { visible } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    // const { title } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.trigger}>
          新建角色
        </Button>
        <Table columns={columns} dataSource={data} />
        <Modal
          title="新增角色"
          visible={visible}
          onOk={() => {}}
          // onCancel={}
        >
          aa
        </Modal>
      </div>
    );
  }
}

export default Role;
