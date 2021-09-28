import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "react-datepicker/dist/react-datepicker.css";

class Addpromocode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productgroups: [],
            categories: [],
            designers: [],
            promostartdate:"",
            promoenddate:""
        }
        
     
    }
 
    componentDidMount() {
        fetch("http://localhost:8080/api/productgroups")
            .then((res) => {
                return res.json();
            })
            .then(result => {

                this.setState({
                    productgroups: result
                });
            }).catch(console.log);

        fetch("http://localhost:8080/api/categories")
            .then((res) => {
                return res.json();
            })
            .then(result => {

                this.setState({
                    categories: result
                });
            }).catch(console.log);

        fetch("http://localhost:8080/api/designers")
            .then((res) => {
                return res.json();
            })
            .then(result => {

                this.setState({
                    designers: result
                });
            }).catch(console.log);
    }


    render() {
        
      
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="dropdownproductgroup">ProductGroups</label>
                            <select id="dropdownproductgroup" onChange={this.onChangeUser}>
                                {this.state.productgroups.map((user, id) => {
                                    return <option value={user.id}>{user.name}</option>;
                                })}
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Promo starts</label>
                            <input type="date"  value={this.state.promostartdate}    onChange={event => this.setState({promostartdate: event.target.value})}
/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="dropdowndesigners">Designers</label>
                            <select id="dropdowndesigners" onChange={this.onChangeUser}>
                                {this.state.designers.map((user, id) => {
                                    return <option value={user.id}>{user.name}</option>;
                                })}
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Promo Ends</label>
                            <input type="date"  value={this.state.promoenddate}    onChange={event => this.setState({promoenddate: event.target.value})} />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="listboxcategories">Categories</label>
                            <ListGroup>
                                <ListGroup.Item>T-Shirt</ListGroup.Item>
                                <ListGroup.Item>Dress</ListGroup.Item>
                            </ListGroup>


                        </div>
                        <div class="form-group col-md-6">
                            <div class="form-row">
                            <label>Promo Percentage</label>
                            <select>
                                <option>5%</option>
                                <option>10%</option>
                                <option>15%</option>
                            </select>
                            <br/>
                            <br/>
                            </div>
                            <div class="form-row">
                            <label>Promo Code</label>
                            <input type="text"></input>
                            </div>
                          
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Promo on</label>
                            <input type="text"></input>

                        </div>
                        <div class="form-group col-md-6">
                            <label for="Text1">Customer Emails</label>
                            <textarea name="Text1" cols="20" rows="2"></textarea>

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <button>Cancel</button>

                        </div>
                        <div class="form-group col-md-6">
                          <button>Save</button>

                        </div>
                    </div>


                </form>

            </div>
        );
    }
}
export default Addpromocode;