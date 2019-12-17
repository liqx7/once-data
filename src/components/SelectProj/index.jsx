import { Menu } from 'antd';
import React from 'react';
import classNames from 'classnames';
import { connect } from 'dva';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

@connect(({ proj }) => ({
  currentProj: proj.currentProj,
  projs: proj.projs,
}))
class SelectProj extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.fetchProjs();
  }

  fetchProjs = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'proj/fetchProjList',
    });
  };

  changeProj = ({ key }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'proj/setProj',
      payload: key,
    });
  };

  render() {
    const {
      className,
      currentProj,
      projs: { list },
    } = this.props;

    // const projs = [
    //   { id: 1, name: '1' },
    //   { id: 2, name: '2' },
    // ];

    const projMenu = (
      <Menu className={styles.menu} selectedKeys={[currentProj]} onClick={this.changeProj}>
        {list.map(proj => (
          <Menu.Item key={proj.id}>{proj.name}</Menu.Item>
        ))}
      </Menu>
    );

    return (
      <HeaderDropdown overlay={projMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          {/* <Icon type="global" /> */}
          当前项目：{(list.find(v => String(v.id) === currentProj) || list[0] || {}).name}
        </span>
      </HeaderDropdown>
    );
  }
}

export default SelectProj;
