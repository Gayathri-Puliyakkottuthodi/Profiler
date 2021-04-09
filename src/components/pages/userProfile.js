import React from 'react';

import axios from 'axios';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Route, Redirect,Switch} from "react-router-dom";

const {Header,Footer,Sider,Content} = Layout;


export default class userProfile extends React.Component {
  state = {
    persons: [],
    name: '',
  }

  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
       
        <Layout>
  <Header>header</Header>
  <Layout>
      {/* <Sider>
      <Switch>
       <Route path="/list" component={userProfile} />
        <Redirect to="/list" from="/" />
        </Switch>
        </Sider> */}
    <Content>bbdkskjdhkjfh </Content>
    
  </Layout>
  <Footer>footer</Footer>
</Layout>
      </div>
    )
  }
 }

// { this.state.persons.map(person =><h1>{person.name}</h1>}