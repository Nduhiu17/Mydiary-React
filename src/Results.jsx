import React, { Component } from 'react';
import axios from 'axios';
import API from './api';

export default class Results extends Component {
    state = {
        entries: []
      }

    componentDidMount() {
        this.getEntries()
      }

      getEntries() {
        API.get(`/api/v1/entries`)
        .then(res => {
          const entries = res.data;
          console.log(res.data.data);
          this.setState({ entries });                 
        })
      }
  render() {
    return (
        <div>
            { this.state.entries.map(entry =>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">{entry.title}</h5>
                <p class="card-text">{entry.description}</p>
                <button class="btn btn-primary">Edit</button> 
                <button type="button" class="btn btn-danger">Delete</button>
                </div>
             </div>
         )}
        </div>
    )
  }
}
