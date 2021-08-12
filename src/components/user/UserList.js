import React, { Component } from 'react';
import UserTableData from "./UserTableComponent/UserTable";
class UsersList extends Component {
    render(){
        const {users , deleteUser} = this.props;
        return(
            <table className="table table-dark">
            <thead className="thead-dark">
              <tr>
                  <th>Id</th>
                  <th>Ad</th>
                  <th>Soyad</th>
                  <th>E-posta</th>
                  <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
            {
                   users.map(item => {
                       const {Id,Name,Email,SurName} = item;
                       return <UserTableData 
                            key        = {Id}
                            Id         = {Id} 
                            name       = {Name} 
                            surname    = {SurName} 
                            email      = {Email} 
                            deleteUser = {deleteUser}/>
                   })
               }
            </tbody>
          </table>
          
        )
    }
}

export default  UsersList;