import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import API from './api';

export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formData: {},
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formData) {
        this.setState({ formData: formData});
        API.post(`/api/v1/auth/login`, formData)
        .then(res => {
            localStorage.setItem('token', res.data.access_token);
            this.props.history.push('/entries');
        });
    }

  render() {
    return (
      <div>
          <div class="signup-main-container">
        <div class="signup-header">
        <NavLink to='/register'><span class="signup-signup-home">
                <i class="fa fa-star"></i>
                sign up
            </span></NavLink>
            <span class="signup-login-home">
                    <i class="fa">&#xf090;</i>
                log in
            </span>
        </div>
        <div class="signup-logo">
            My diary
        </div>
        <div class="signup-slogan">
            Pen down your thoughts and feelings
        </div>
        <div class="register-signup">
            Sign in
        </div>
        <div class="registration-form">
        <LoginForm submitForm={this.handleFormSubmit}/>
        </div>
        <div class="footer-main">
            <p class="p-footer-main">
                &copy; 2018 Mydiary
            </p>
        </div>
      
    </div>
    </div>
    )
  }
}
