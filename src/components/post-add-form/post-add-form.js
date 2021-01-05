import './post-add-form.css';
import {v4 as uuid} from 'uuid'
import { Component } from 'react';


export default class PostAddForm extends Component{
    constructor(props) {
        super(props)

        this.state = { 
            text: ''
        }

        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmitForm = this.onSubmitForm.bind(this)
    }

    onChangeInput(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmitForm(e) {
        e.preventDefault();
        
        this.props.onSubmit(this.state.text, uuid());
        this.setState({
            text: ''
        })        
    }

    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmitForm}>
                <input 
                    type="text"
                    placeholder="What Are You Thinking About Today?"
                    className="form-control new-post-label"

                    onChange={this.onChangeInput}
                    value={this.state.text}
                />
    
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >Post!</button>
            </form>
        )
    }
}