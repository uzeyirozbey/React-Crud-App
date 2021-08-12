import React, { Component } from 'react';
class UserTable extends Component {
    onUserDeleteClick(id,e){
       const  {deleteUser} = this.props;
       deleteUser(id);
    }
    render() {
        const {Id, name, email,surname } = this.props;
        return (
            <tr>
                <td>{Id} </td>
                <td>{name} </td>
                <td>{surname} </td>
                <td>{email} </td>
                <td><button onClick={this.onUserDeleteClick.bind(this, Id)} className="btn btn-danger"> <i className="fa fa trash"></i>  Sil </button></td>
            </tr>
        )
    }
}

export default UserTable;