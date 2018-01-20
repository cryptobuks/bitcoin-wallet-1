import React, { Component } from 'react'
import './ContactFilter.css'

class ContactFilter extends Component {
    onChange = (event) => {
        this.props.onFilter({ term: (event.target.value).toLowerCase() })
    }

    render() {
        return (
            <div className="field filter-container">
                <div className="control filter-input">
                    <input className="input" type="text" onChange={this.onChange} placeholder="Search" />
                </div>
            </div>
        )
    }
}

export default ContactFilter
