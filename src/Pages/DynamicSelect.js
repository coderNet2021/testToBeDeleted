import React, { Component } from "react";

class DynamicSelect extends Component {
  constructor() {
    super();
    this.onChangeUser = this.onChangeUser.bind(this);
  }

  onChangeUser(event) {
    console.log(event.target.value);
  }

  render() {
    const { users } = this.props;
    
    
    return (
      <div>
        This is dynamic select element demo
        <div>
          <span>Select user</span> :
          
            <div>
              
              <select onChange={this.onChangeUser}>
                {users.map((user, id) => {
                  return <option>{user.promocode}</option>;
                })}
              </select>
            </div>
          
        
        </div>
      </div>
    );
  }
}

export default DynamicSelect;