
import React, { Component } from "react";

import DynamicSelect from "./DynamicSelect";


class Orders extends Component {
  constructor() {
    super();
    this.state = {
        productgroups:[],
        
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/promocodes")
    .then((res) => {
        return res.json();
    })
    .then(result => {

        this.setState({
            productgroups: result
        });
    }).catch(console.log);
  }

  render() {
    
    return (
      <div>
        <DynamicSelect users={this.state.productgroups} />
      </div>
    );
  }
}

export default Orders;