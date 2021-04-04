import React, { Component } from 'react';
import {InputGroup} from 'react-bootstrap';

class SortButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AtoZ: false,
        }
    }

    render() {
        return(
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Sort By</InputGroup.Text>
                </InputGroup.Prepend>
                &nbsp;
                <button className="btn btn-primary" onClick={() => this.setState({ AtoZ: !this.state.AtoZ })}>
                    { this.state.AtoZ ? <i className="fas fa-sort-alpha-up" /> : <i className="fas fa-sort-alpha-down" />}
                </button>
            </InputGroup>
        )
    }
}

export default SortButton;