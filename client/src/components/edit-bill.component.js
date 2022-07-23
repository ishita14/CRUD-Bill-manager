import React , { Component } from 'react';
import axios from 'axios';

export default class EditBill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Month: '',
            Consumption: '',
            Amount: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/' + this.props.match.params.id)
            .then( res => {
                this.setState({
                    Month: res.data.Month,
                    Consumption: res.data.Consumption,
                    Amount: res.data.Amount,
                })
            })
            .catch( err => console.log(err));
    }

    onChangeMonth = (e) => {
        this.setState({
            Month: e.target.value
        });
    }

    onChangeConsumption = (e) => {
        this.setState({
            Consumption: e.target.value
        });
    }

    onChangeAmount = (e) => {
        this.setState({
            Amount: e.target.value
        });
    }

    
    deleteBill = (e) => {
        axios.delete('http://localhost:4000/bill/' + this.props.match.params.id)
        .then( res => {
            if(res.data === 'bill deleted successfully') this.props.history.push('/');
            });

        
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            Month: this.state.Month,
            Consumption: this.state.Consumption,
            Amount: this.state.Amount,
        };
        axios.post('http://localhost:4000/update/' + this.props.match.params.id, obj)
            .then( res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Bill</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Month: </label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.Month}
                                onChange={this.onChangeMonth}
                                />
                    </div>
                    <div className="form-group">
                        <label>Consumption: </label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.Consumption}
                                onChange={this.onChangeConsumption}
                                />
                    </div>

                    <div className="form-group">
                        <label>Amount: </label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.Amount}
                                onChange={this.onChangeAmount}
                                />
                    </div>
                   
                    
                        <br />
                        <div className="form-group">
                            <input type="submit" value="Update Bill" className="btn btn-primary" />
                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={this.deleteBill} value="Delete Bill" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}