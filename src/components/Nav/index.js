import React from 'react';
import SearchBar from '../SearchBar';
import SortButton from '../SortButton';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

function Nav({searchTerm, onSearch, handleSortName}) {
    return(
        <Container>
            <Row>
                <Col>
                    <SearchBar />
                </Col>
                <Col>
                    <div className="float-right">
                        <SortButton />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Nav;