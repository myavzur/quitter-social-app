import { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props) 
        
        this.onSearch = this.onSearch.bind(this)
    }

    onSearch(e) {
        const pattern = e.target.value;

        this.props.onSearch(pattern)
    }


    render() {
        return (
            <input 
                placeholder="Search For Posts"
                type="text"
                className="search-input form-control"
                onChange={this.onSearch}
            />
        )
    }
}