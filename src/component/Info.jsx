import React from 'react';
import { Descriptions } from 'antd';
import './Info.css'
const items = [
  {
    key: '1',
    label: '名字',
    children: '苗育康',
  },
  {
    key: '2',
    label: '性别',
    children: '男',
  },
  {
    key: '3',
    label: '联系方式',
    children: '180000000',
  },
  {
    key: '4',
    label: '邮件地址',
    children: '754993120@qq.com',
  },
  {
    key: '5',
    label: '学号',
    children: '202100130221',
  },
  {
    key:'6',
    label:'学校',
    children:'山东大学',
  }
];
const App = () => <Descriptions title="" items={items}/>;
export default App;