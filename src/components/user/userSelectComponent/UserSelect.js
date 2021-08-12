import React, { Component } from 'react';
class UserSelect extends Component {
    render() {
        const {Id, name,surname } = this.props;
        return (
            <option value= {Id}> { name +"  "+ surname} </option>
        )
    }
}

export default UserSelect;