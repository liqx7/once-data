import { Menu } from 'antd';
import React from 'react';
import classNames from 'classnames';
import { connect } from 'dva';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

@connect(({ proj }) => ({
  currentProj: proj.currentProj,
}))
class SelectProj extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  changeProj = ({ key }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'proj/setProj',
      payload: key,
    });
  };

  render() {
    const { className, currentProj } = this.props;

    const projs = [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
    ];

    const projMenu = (
      <Menu className={styles.menu} selectedKeys={[currentProj]} onClick={this.changeProj}>
        {projs.map(proj => (
          <Menu.Item key={proj.id}>{proj.name}</Menu.Item>
        ))}
      </Menu>
    );

    return (
      <HeaderDropdown overlay={projMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          {/* <Icon type="global" /> */}
          当前项目：{(projs.find(v => String(v.id) === currentProj) || projs[0]).name}
        </span>
      </HeaderDropdown>
    );
  }
}

export default SelectProj;
