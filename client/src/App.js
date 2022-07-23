import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import BillsList from './components/bills-list.component';
import CreateBill from './components/create-bill.component';
import EditBill from './components/edit-bill.component';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Electricity Bill Manager</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="navbar-nav  Rigth">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Bills</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Bill</Link>
                </li>
              </ul>
            </div>

          </nav>

          <Route path='/' exact component={BillsList} />
          <Route path='/edit/:id' component={EditBill} /> 
          <Route path='/create' component={CreateBill} /> 
        </div>
      </Router>
    );
  }
}

export default App;
