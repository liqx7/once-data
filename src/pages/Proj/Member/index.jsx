import React from 'react';
import { List, Avatar, Button, Skeleton, Modal } from 'antd';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { FormattedMessage } from 'umi-plugin-react/locale';
// import { Card, Typography, Alert } from 'antd';
// import styles from './Welcome.less';

// import reqwest from 'reqwest';

const count = 3;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class Member extends React.Component {
  constructor() {
    super();
    this.state = {
      initLoading: true,
      loading: false,
      data: [],
      list: [],
      waitVisible: false,
      hasVisible: false,
    };
  }

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    const res = {
      results: [[{ id: 1, name: '1', roles: ['1', 'ee'] }]],
    };
    // reqwest({
    //   url: fakeDataUrl,
    //   type: 'json',
    //   method: 'get',
    //   contentType: 'application/json',
    //   success: res => {
    callback(res);
    //   },
    // });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      loading: true,
      list: prevState.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    }));
    this.getData(res => {
      this.setState(
        prevState => ({
          data: prevState.data.concat(res.results),
          list: prevState.data.concat(res.results),
          loading: false,
        }),
        () => {
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  showModal = type => {
    this.setState({
      [`${type}Visible`]: true,
    });
  };

  cancelModal = type => {
    this.setState({
      [`${type}Visible`]: false,
    });
  };

  handleOk = (e, type) => {
    this.cancelModal(type);
  };

  handleCancel = (e, type) => {
    this.cancelModal(type);
  };

  render() {
    const waitList = [];
    const hasList = [];
    const { initLoading, loading, list, waitVisible, hasVisible } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>加载更多</Button>
        </div>
      ) : null;

    return (
      <div>
        <div>
          <Button onClick={() => this.showModal('wait')}>待处理申请</Button>
          <Button onClick={() => this.showModal('wait')}>已处理申请</Button>
        </div>
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <List.Item
              actions={[<a key="list-loadmore-edit">移除</a>, <a key="list-loadmore-more">授权</a>]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.name}
                  description={item.roles}
                />
                {/* <div>content</div> */}
              </Skeleton>
            </List.Item>
          )}
        />
        <Modal
          title="待处理申请"
          visible={waitVisible}
          onOk={e => this.handleOk(e, 'wait')}
          onCancel={e => this.handleCancel(e, 'wait')}
        >
          {waitList}
        </Modal>
        <Modal
          title="已处理申请"
          visible={hasVisible}
          onOk={e => this.handleOk(e, 'has')}
          onCancel={e => this.handleCancel(e, 'has')}
        >
          {hasList}
        </Modal>
      </div>
    );
  }
}

export default Member;
