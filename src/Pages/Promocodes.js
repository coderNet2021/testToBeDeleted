import React from "react";
import axios from "axios";
import Moment from "moment";
import AddPromoCode from "./Addpromocode";
import ReactTable from "react-table";
import "react-table/react-table.css";


class Promocodes extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: true,
            showaddpromocode: false
        }
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent() {
        this.setState({ showaddpromocode: !this.state.showaddpromocode });
    }
    async getUsersData() {
        const res = await axios.get('http://localhost:8080/api/promocodes')
        console.log(res.data)
        this.setState({ loading: false, users: res.data })
    }
    componentDidMount() {
        this.getUsersData()
    }

    render() {
        const { showaddpromocode } = this.state;
        const columns = [
            {
                Header: 'Code',
                accessor: 'promocode',
                width: 100
            }
            , {
                Header: 'Status',
                accessor: 'status',
                Cell: (row) => {
                    return <h4>{row.original.status}</h4>
                }
            },
            {
                Header: 'Starts',
                id: 'promostarts',
                accessor: row => Moment(row.promostarts).format("DD-MM-YYYY"),
                width: 170
            },
            {
                Header: 'Ends',
                id: 'promoends',
                accessor: row => Moment(row.promoends).format("DD-MM-YYYY"),
                width: 170
            },
            {
                Header: 'Percentage',
                accessor: 'promopercentage',
                width: 170
            },
            {
                Header: 'Email',
                accessor: 'customeremails',
                Cell: (row) => {
                    return <a href="">{row.original.promocode}</a>
                }
            },
            {
                Header: 'Action',
                accessor: 'Action',
                Cell: (row) => {
                    return (
                        <>
                            <a href={`mail.to:${row.original.email}`}>Edit</a><br />
                            <a href={`mail.to:${row.original.email}`}>Stop</a>
                        </>
                    );
                }
            },

        ]
        return (
            <div>
           


                <ReactTable
                    data={this.state.users}
                    columns={columns}
                    defaultPageSize={6}
                />

                <button onClick={() => this.hideComponent()} >
                    Add Promo Code
                </button>
                <br />
                <br />
                <div>
                    {showaddpromocode && <AddPromoCode />}
                </div>

            </div>


        );
    }

}
export default Promocodes;