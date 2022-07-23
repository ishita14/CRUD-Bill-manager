import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'


const Bill = props => (
    <tr>
        <td >{props.bill.Month}</td>
        <td >{props.bill.Consumption}</td>
        <td >{props.bill.Amount}</td>
        
        <td>
            <Link to={"/edit/" + props.bill._id}>View</Link>
        </td>
    </tr>
)


export default class BillsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bills: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then( res => {
                this.setState({
                    bills: res.data
                })
            })
            .catch( err => console.log(err));
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/')
            .then( res => {
                this.setState({
                    bills: res.data
                })
            })
            .catch( err => console.log(err));
    }

    billList = () => this.state.bills.map(
        (bill, index) => <Bill bill={bill} key={index} />
    )
    

    render() {
        return (
            <div>
                <h3 className='center'>Bill List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Consumption</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.billList() }
                    </tbody>
                </table>
            </div>
        )
    }
}