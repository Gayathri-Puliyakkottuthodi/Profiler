import React from 'react';

import axios from 'axios';
import { Layout } from 'antd';
import 'antd/dist/antd.css';


const {Header,Footer,Sider,Content} = Layout;


export default class PersonList extends React.Component {
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
    <Sider> { this.state.persons.map(person =><h1>{person.name}</h1> )}</Sider>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
      </div>
    )
  }
}

// export default class PersonList extends React.Component {
//     state = {
//       name: '',
//     }
  
//     handleChange = event => {
//       this.setState({ name: event.target.value });
//     }
  
//     handleSubmit = event => {
//       event.preventDefault();
  
//       const user = {
//         name: this.state.name
//       };
  
//       axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//         .then(res => {
//           console.log(res);
//           console.log(res.data);
//         })
//     }
  
//     render() {
//       return (
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Person Name:
//               <input type="text" name="name" onChange={this.handleChange} />
//             </label>
//             <button type="submit">Add</button>
//           </form>
//         </div>
//       )
//     }
//   }