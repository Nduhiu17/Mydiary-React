import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Login extends Component {
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
                    <NavLink to='/entries'> <button type="submit" class="btn btn-primary">Sign in</button></NavLink>
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
