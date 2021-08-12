import React, { Component } from 'react';
class AddUser extends Component {
    state = {
      Name    :" ",
      Email   :" ",
      SurName :" "
    } 

    onNameChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onEmailChange(e){
        this.setState({
           [e.target.name] : e.target.value
        })
     }

     onSurNameChange(e){
         this.setState({
             [e.target.name] : e.target.value
         })
     }

    onAddSubmit(e){
        const {addUser}              = this.props;
        const {Name, Email, SurName} = this.state;
        const newUser = {
              Id :Math.random(),
              Name    : Name,
              Email   : Email,
              SurName : SurName
          };
        addUser(newUser);
        e.preventDefault();
    }

    render(){
        const {Name,Email,SurName} = this.state;
        return(
            <div className="card">
               <h5 className="card-header"> Yeni Kullanıcı </h5>
                <div className ="card-body">
                    <form className="form-group" >
                       <label htmlFor="name"> Ad</label>
                       <input type        ="text"
                              name        ="Name"
                              id          ="Name"
                              placeholder ="Ad"
                              className   ="form-control"
                              onChange    ={this.onNameChange.bind(this)}
                              value       ={Name}
                              />
                    </form><br/>
                    <form className="form-group" >
                       <label htmlFor="SurName"> Soyad</label>
                       <input type        ="text"
                              name        ="SurName"
                              id          ="SurName"
                              placeholder ="Surname"
                              className   ="form-control"
                              onChange    ={this.onSurNameChange.bind(this)}
                              value       ={ SurName }
                              />
                    </form><br/>
                    <form className="form-group">
                       <label htmlFor="email"> E-Posta</label>
                       <input type        ="mail"
                              name        ="Email"
                              id          ="Email"
                              placeholder ="eposta"
                              className   ="form-control"
                              onChange    ={this.onEmailChange.bind(this)}
                              value       = {Email}
                              />
                              <br/>
                       <button type="button" onClick={this.onAddSubmit.bind(this)} className="btn btn-success btn-block">Yeni Kullanıcı Ekle</button>
                    </form>
                <br/>
                </div>
            </div>
        )
    }
}

export default  AddUser;