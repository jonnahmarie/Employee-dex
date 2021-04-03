import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function Nav({searchTerm, onSearch, handleSortName}) {
    return(
        <Container>
            <Row>
                <Col>
                    <InputGroup>
                        <FormControl 
                            value={searchTerm}
                            type="text"
                            placeholder="Search By Role"
                            name="title"
                            onChange={onSearch}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <div className="float-right">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Sort By</InputGroup.Text>
                            </InputGroup.Prepend>&nbsp;
                            <Button onClick={handleSortName} variant="primary">
                            <i className="fas fa-sort-alpha-down" />
                            </Button>&nbsp;
                            <Button onClick={handleSortName} variant="primary">
                            <i className="fas fa-sort-alpha-up" />
                            </Button>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Nav;