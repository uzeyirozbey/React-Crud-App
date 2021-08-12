import React, { Component } from 'react';
import UserSelectOption from "./userSelectComponent/UserSelect";
class UsersSelect extends Component {
    onSelectChange = (e) => {
         const id= e.target.value;
         const  {getSelectedUser} = this.props;
         getSelectedUser(id);   
    }
    render() {
        const {users} = this.props;
        return (
            <select className="form-select"
                    onChange={ this.onSelectChange.bind(this)}
                   >
                {
                    users.map(item => {
                        const { Id, Name, SurName } = item;
                        return <UserSelectOption
                            key={Id}
                            Id={Id}
                            name={Name}
                            surname={SurName}
                        />
                    })
                }

            </select>
        )
    }
}

export default UsersSelect;