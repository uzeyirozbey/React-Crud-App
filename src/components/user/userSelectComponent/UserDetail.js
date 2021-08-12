import React, { Component } from 'react';
class UserDetail extends Component {
    render() {
        const { selectedUser } = this.props;
        // console.log(selectedUser);
        return (
            <div class="card" for-style="width: 18rem;">
                <div class="card-header">
                    Öğrenci Detay
                </div>
                <ul class="list-group list-group-flush">
                    {
                        selectedUser.map(item => {
                            const { Id, Name, SurName } = item;
                            return (
                                <div>
                                    <li className="list-group-item"> {Id + "-" + Name + "  " + SurName}   </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default UserDetail;