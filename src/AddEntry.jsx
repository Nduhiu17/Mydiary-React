import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import EntryForm from './EntryForm';
import API from './api';


export default class AddEntry extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formData: {},
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formData) {
        this.setState({ formData: formData});
        API.post(`/api/v1/entries`, formData)
        .then(res => {
            this.props.history.push('/entries');
        });
    }


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
           <EntryForm submitForm={this.handleFormSubmit}/>
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
