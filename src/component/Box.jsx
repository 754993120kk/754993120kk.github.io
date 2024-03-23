import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import {FilePdfOutlined} from '@ant-design/icons'
import Pdf from './Pdf'
import './Box.css'
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Button onClick={showDrawer} type='primary'
    style={{color:'black',fontSize:'20px',
    height:'50px',border:'5px solid rgba(0, 179, 255, 0.228)'}} className='box-bt'><FilePdfOutlined />点击展示实验报告</Button>
      <Drawer
        title="云计算实验报告：苗育康-202100130221-实验3"
        placement={'left'}
        width={700}
        height={300}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <p> <Pdf/></p>
      </Drawer>
    </>
  );
};
export default App;