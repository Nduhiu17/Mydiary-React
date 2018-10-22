import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import API from './api';


export default class Register extends Component {

    constructor (props) {
        super(props);
        this.state = {
            formData: {},
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formData) {
        this.setState({ formData: formData});
        API.post(`/api/v1/auth/signup`, formData)
        .then(res => {
            if(res.status===201){
                this.props.history.push('/entries');
            }
        });
    }
    
    

  render() {
    return (
      <div>
          <div class="signup-main-container">
        <div class="signup-header">
            <span class="signup-signup-home">
                <i class="fa fa-star"></i>
                sign up
            </span>
            <span class="signup-login-home">
                <i class="fa">&#xf090;</i>
                <NavLink to='/login'>log in</NavLink>
            </span>
        </div>
        <div class="signup-logo">
            My diary
        </div>
        <div class="signup-slogan">
            Pen down your thoughts and feelings
        </div>
        <div class="register-signup">
            Password registration
        </div>
        <div class="registration-form">
         <RegisterForm submitForm={this.handleFormSubmit}/>
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