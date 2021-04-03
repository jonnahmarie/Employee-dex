import React from 'react';
import Logo from '../../assets/img/Dunder_Mifflin_logo.png';
import {Container} from 'react-bootstrap';

function Header() {
    return (
        <div style={{backgroundColor: "#274682", padding: "20px"}} className="shadow">
            <Container>
                <header>
                    <div style={{backgroundImage:`url(${Logo})`, backgroundRepeat: "no-repeat", backgroundPosition: "center left", backgroundSize: "130px", height: "80px"}}>
                    </div>
                </header>
            </Container>
        </div>
    );
}

export default Header;