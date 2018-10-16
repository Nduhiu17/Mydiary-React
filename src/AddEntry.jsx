import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class AddEntry extends Component {
  render() {
    return (
      <div>
         <div class="signup-main-container">
        <div class="signup-header">
        <NavLink to='/'><span class="signup-login-home">
                    <i class="fa">&#xf090;</i>
                    log out
            </span></NavLink>
        </div>
        <NavLink to='/entries'><div class="signup-logo">
        My diary
        </div></NavLink>
        <div class="signup-slogan">
            Pen down your thoughts and feelings
        </div>
        <div class="post-entry">
            <textarea name="" id="entry-textarea" class="entry-textarea" rows="8">write an entry</textarea>
        </div>
        <button type="button" class="save-entry-button">Save entry</button>
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
