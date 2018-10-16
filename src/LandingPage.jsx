import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div class="main-container">
            <div class="header">
            <NavLink to='/login'><span class="login-home">
                LOGIN
                </span></NavLink>
                |
                <NavLink to='/register'> <span class="signup-home">
                SIGN UP
                </span></NavLink>
            </div>
            <div class="logo">
                My Diary
            </div>
            <div class="slogan">
                Pen down your thoughts and feelings
            </div>
            <div class="register-home-center">
            <NavLink to='/register'> <button class="register-button">
                    Get your free account
                </button></NavLink>
            </div>
            <div class="footer">
                <p class="p-footer">
                    &copy; 2018 Mydiary
                </p>
            </div>
         </div>
      </div>
    )
  }
}

export default LandingPage;
