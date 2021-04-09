import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
  } from '@ant-design/icons';
//import {useHistory}  from 'react-router';
import userProfile from '../pages/userProfile';


const SideNav = () => {
    

return (
      <div>
        <div style={{height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" >
                    <UserOutlined />
                    <span> Users</span>
                </Menu.Item>
                
            </Menu>
        </div>
  );
}
export default SideNav;