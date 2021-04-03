import React from 'react';
import {Container} from 'react-bootstrap';

function Layout(props) {
    return (
        <Container className="mt-5 mb-5">
            {props.children}
        </Container>
    );
}

export default Layout;