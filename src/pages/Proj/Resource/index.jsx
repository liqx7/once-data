import React from 'react';
import {
  // G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  // Legend,
  // View,
  // Guide,
  // Shape,
  // Facet,
  // Util,
} from 'bizcharts';
import { Button, List } from 'antd';
import DataSet from '@antv/data-set';

// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { FormattedMessage } from 'umi-plugin-react/locale';
// import { Card, Typography, Alert } from 'antd';
// import styles from './Welcome.less';

class Resource extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { DataView } = DataSet;
    const data = [
      {
        item: '已用',
        count: 40,
      },
      {
        item: '未用',
        count: 21,
      },
    ];
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    const cols = {
      percent: {
        formatter: val => `${val * 100}%`,
      },
    };

    const listdata = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ];
    return (
      <div>
        <section>
          <h1>hdfs</h1>
          <Button>申请</Button>
          <div>
            <Chart
              height={window.innerHeight}
              data={dv}
              scale={cols}
              padding={[80, 100, 80, 80]}
              forceFit
            >
              <Coord type="theta" radius={0.75} />
              <Axis name="percent" />
              {/* <Legend
              position="right"
              offsetY={-window.innerHeight / 2 + 120}
              offsetX={-100}
            /> */}
              <Tooltip
                showTitle={false}
                itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
              />
              <Geom
                type="intervalStack"
                position="percent"
                color="item"
                tooltip={[
                  'item*percent',
                  (item, percent) => {
                    percent = `${percent * 100}%`;
                    return {
                      name: item,
                      value: percent,
                    };
                  },
                ]}
                style={{
                  lineWidth: 1,
                  stroke: '#fff',
                }}
              >
                <Label content="percent" formatter={(val, item) => `${item.point.item}: ${val}`} />
              </Geom>
            </Chart>
          </div>
        </section>

        <section>
          <h1>yarn队列</h1>
          <Button>申请</Button>
          <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={listdata}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </section>
      </div>
    );
  }
}

export default Resource;
