/*
 * Created By Lqx on 20191205
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'dva';

// import styles from './index.less';

@connect()
class DisplayRow extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map(v => (
          <Row gutter={24}>
            <Col span={6}>{v.title}</Col>
            <Col span={18}>{v.content}</Col>
          </Row>
        ))}
      </div>
    );
  }
}
export default DisplayRow;
