import yayJpg from '../assets/yay.jpg';
import React, { useEffect, useRef, useState } from 'react';
import { DualAxes } from '@ant-design/plots';
import { getSomeData } from '../services/data';

const CHART_MAP = {};

export default function HomePage() {
  const [data, setData] = useState([]);
  const dataRef = useRef();
  dataRef.current = data;
  useEffect(() => {
    // 挂载时执行的操作
    
    asyncFetch();
    return () => {
      // 卸载时执行的操作
    };
  }, []); // 空依赖数组表示只执行一次（相当于componentDidMount和componentWillUnmount）

  const asyncFetch = async () => {
    const res = await getSomeData();
    if(res && res.data) {
      setData(res.data)
    }
  };

  const config = {
    xField: 'time',
    data: data,
    children: [
      {
        type: 'interval',
        yField: 'min'
      },
      {
        type: 'line',
        yField: 'max',
      },
    ],
    axis: {
      y: false
    },
    style: {
      stroke: '#59a14f',
      fill: (item, index, arr) => {
        if(item.max <= 0) {
          return 'red'
        }
        if(item.min >= 0) {
          return 'green'
        }
      }
    }
  };
  
  return (
    <div>
      <DualAxes {...config} />
    </div>
  );
}