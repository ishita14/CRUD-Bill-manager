import React , { Component } from 'react';
import axios from 'axios';

export default class CreateBill extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Month: '',
            Consumption: '',
            Amount: '',
        }
    }

    onChangeMonth = e => {
        this.setState({ Month: e.target.value });
    }

    onChangeConsumption = e => {
        this.setState({ Consumption: e.target.value });
    }

    onChangeAmount = e => {
        this.setState({ Amount: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        // SUBMIT LOGIC NEED TO BE IMPLEMENTED HERE
        console.log('Form submitteed:');
        console.log(`Month: ${this.state.Month}`);
        console.log(`Consumption: ${this.state.Consumption}`);
        console.log(`Amount: ${this.state.Amount}`);

        const newBill = {
            Month: this.state.Month,
            Consumption: this.state.Consumption,
            Amount: this.state.Amount,
        }

        axios.post('http://localhost:4000/addBill', newBill)
            .then( res =>{ console.log(res.data)
                this.props.history.push('/');

            });

        this.setState({
            Month: '',
            Consumption: '',
            Amount: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Bill</h3>
                <form onSubmit = {this.onSubmit}>
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
                    
                    <div className="form-group">
                        <input type="submit" value="Create Bill" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}