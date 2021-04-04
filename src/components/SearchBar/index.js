import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import data from '../../data/employeeData.json';

function SearchBar(searchTerm, onSearch) {
    return (
        <InputGroup>
        <FormControl 
            value={searchTerm}
            type="text"
            placeholder="Search By Role"
            name="title"
            onChange={onSearch}
        />
    </InputGroup>
    )
}

export default SearchBar;