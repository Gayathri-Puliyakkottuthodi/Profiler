import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import userProfile from "../components/pages/userProfile";
import SideNav from "../components/layouts/sidebar";

import { Layout } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';




const { Header, Sider, Content} = Layout;

const ApplicationRoutes = () => {
    
        const [collapse, setCollapse] = useState(false);
         useEffect(() => {
          window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
        }, []);
return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapse}>
          <SideNav />
        </Sider>
        <Layout>
          <Header className="siteLayoutBackground" style={{padding: 0, background: "#001529"}}>
                    {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                       
                        style: {color: "#fff"}
                    })}
          </Header>
            <Content style={{margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
              <Switch>
                  <Route path="/list" component={userProfile} />
                  
                  <Redirect to="/list" from="/" />
              </Switch>
            </Content>
        </Layout>
      </Layout>
  </Router>
);
}



export default ApplicationRoutes
