import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function Nav({ searchTerm, onSearch, handleSortFirstName, handleSortLastName }) {

    return(
        <Container>
            <Row>
                <Col>
                    <InputGroup>
                    <FormControl 
                        value={searchTerm}
                        onChange={onSearch}
                        type="text"
                        placeholder="Search By Role"
                        name="title"
                    />
                    </InputGroup>
                </Col>
                <Col>
                    <div className="float-right">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Sort By</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Button onClick={handleSortFirstName} variant="primary">
                                First Name
                            </Button> &nbsp;
                            <Button onClick={handleSortLastName} variant="primary">
                                Last Name
                            </Button>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Nav;