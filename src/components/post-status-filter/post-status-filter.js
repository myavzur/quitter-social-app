import { Component } from 'react';
import './post-status-filter.css';

 
export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buttons: [
                {label: 'Все', filterName: 'all'},
                {label: 'Понравилось', filterName: 'like'}
            ]
        }
    }


    
    render() {
        const buttons = this.state.buttons.map( ({label, filterName}) => {
            const active = filterName === this.props.filter;
            const clazzes = active ? 'btn btn-info' : 'btn btn-outline-secondary'

            return (
                <button
                    key={filterName}
                    type="button"
                    className={clazzes}
                    onClick={() => this.props.onFilter(filterName)}
                >{label} </button>
            )
        })
        
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}