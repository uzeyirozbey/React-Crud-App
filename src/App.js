import React, { Component } from 'react';
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";
import UserSelect from './components/user/UserSelect';
import UserDetail from './components/user/userSelectComponent/UserDetail';
class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        users: [
         { Id: 1, Name: "Üzeyir", SurName : "Özbey",  Email: "ozbey.uzeyir@gmail.com"},
         { Id: 2, Name: "Tanju",  SurName : "Güler",  Email: "tanju@gmail.com" },
         { Id: 3, Name: "Ekrem",  SurName : "Güler",  Email: "ekrem@gmail.com" },
         { Id: 4, Name: "Yusuf",  SurName : "Berk",   Email: "yusuf@gmail.com" },
         { Id: 5, Name: "Şahin",  SurName : "Durgun", Email: "sahin@gmail.com" }
       ],
        selectedUser : []
     };
    this.deleteUser      = this.deleteUser.bind(this);
    this.addUser         = this.addUser.bind(this);
    this.getSelectedUser = this.getSelectedUser.bind(this);
  }

  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.Id !== id)
    this.setState({
      users:  updatedUsers
    })
  }

  addUser(newUser){
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
       users: updatedUsers
     })
  }

  getSelectedUser(id){
   let userValue = this.state.users;
   userValue = userValue.filter(user => user.Id == id)
   this.setState({
       selectedUser :  userValue
     })
  }

  render() {
    return (
      <div className="container">
        <h1> User Data</h1>
        <hr />
          <AddUser    addUser = {this.addUser}/>
        <br></br>
          <UserList   deleteUser = {this.deleteUser} users={this.state.users} />
        <hr></hr>
          <UserSelect getSelectedUser = {this.getSelectedUser} users={this.state.users} />
        <br/>
          <UserDetail selectedUser = {this.state.selectedUser} ></UserDetail>
         <br/>
      </div>
    )
  }
}
export default App;
