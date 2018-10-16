import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Register extends Component {
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
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Repeat Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
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