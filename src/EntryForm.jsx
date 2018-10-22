import React, { Component } from 'react';

export default class EntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:'',
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
                <div class="text-area-labels">
                    <label for="exampleFormControlTextarea1" class="label-add-entry">Title</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" value={this.state.title} name="title" onChange={this.handleChange} ></textarea>
                    <label for="exampleFormControlTextarea1" class="label-add-entry">Description</label>
                    <textarea name="description" id="entry-textarea" class="entry-textarea" rows="8" value={this.state.description} onChange={this.handleChange}></textarea>
                    <input class="btn btn-primary" type="submit" value="Save entry"/>
                </div>
            </form> 
        </div>
        );
    }
}
