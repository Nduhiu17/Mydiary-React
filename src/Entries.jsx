import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Results from './Results';

export default class Entries extends Component {
  render() {
    return (
      <div>
        <div class="signup-main-container">
        <div class="signup-header">
        <NavLink to='/addentry'><span class="signup-signup-home">
                <i class="fas fa-pen-square"></i>
                write
            </span></NavLink>
            <NavLink to='/'><span class="signup-login-home">
                <i class="fa">&#xf090;</i>
                log out
            </span></NavLink>
        </div>
        <div class="signup-logo">
            My diary
        </div>
        <div class="signup-slogan">
            Pen down your thoughts and feelings
        </div>
        <form class="navbar-form" role="search"  id="search-form">
                <div class="input-group add-on">
                  <input class="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"/>
                </div>
              </form>
              <div>
                  <Results/>
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
