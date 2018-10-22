import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            value:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let form = event.target.name;
        let state = {};
        state[form] = event.target.value;

        this.setState(state);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.submitForm(this.state);
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={this.state.email} name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                 </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={this.state.password} name="password" onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <input class="btn btn-primary" type="submit" value="Login"/>
            </form> 
        </div>
        );
    }
}

LoginForm.propTypes = {
    submitForm: PropTypes.func,
};
