import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Calender from "./Calendar";


class Sales extends React.Component {
    constructor() {
        super();
        this.state = {
            productgroups: [],
            agegroups: [],
            designers: []
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

        fetch("http://localhost:8080/api/agegroups")
            .then((res) => {
                return res.json();
            })
            .then(result => {

                this.setState({
                    agegroups: result
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

                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Sales</h1>
                    </div>
                </div>


                <form>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="kidzieidtext">Kidzie ID</label>
                            <input type="text" class="form-control" id="kidzieidtext" />
                        </div>
                        <div class="form-group col-md-10">
                            <label for="calenderdiv">ProductsAdded</label>
                            <div id="calenderdiv">FROM<Calender />TO<Calender /></div>
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="dropdownproductgroup">Product Group</label>
                            <div class="dropdown" id="dropdownproductgroup">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Choose Product Group
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    {this.state.productgroups.map(pg => (
                                        <li><button class="dropdown-item" type="button">{pg.name}</button></li>
                                    ))}


                                </ul>
                            </div>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdownonsale">On Sale?</label>
                            <Dropdown id="dropdownonsale">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Sale(Yes/No)
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Yes</Dropdown.Item>
                                    <Dropdown.Item>No</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdownsalepercentage">Sale %</label>
                            <Dropdown id="dropdownsalepercentage">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Sale Percentage
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>5%</Dropdown.Item>
                                    <Dropdown.Item>10%</Dropdown.Item>
                                    <Dropdown.Item>15%</Dropdown.Item>
                                    <Dropdown.Item>20%</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="dropdownagegroup">Age Group</label>
                            <Dropdown id="dropdownagegroup">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Age Group
                                </Dropdown.Toggle>

                                <Dropdown.Menu>

                                    {this.state.agegroups.map(ag => (
                                        <Dropdown.Item>{ag.description}</Dropdown.Item>
                                    ))}


                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="dropdowngender">Gender</label>
                            <Dropdown id="dropdowngender">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Gender
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Male</Dropdown.Item>
                                    <Dropdown.Item>Female</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="dropdowndesigners">Designers</label>
                            <Dropdown id="dropdowndesigners">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Gender
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {this.state.designers.map(des => (
                                        <Dropdown.Item>{des.name}</Dropdown.Item>
                                    ))}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>



            </div>

        );
    }
}
export default Sales;