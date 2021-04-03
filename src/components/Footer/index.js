import React from 'react';
import {Container} from 'react-bootstrap';

function Footer() {
    return (
        <div style={{backgroundColor: "#fff"}} className="p-3">
            <Container className="text-center">
                <p>
                    Employee photos cropped from <a href="https://theoffice.fandom.com/">DunderPedia</a>. | Photos are hosted on <a href="https://imgbb.com/">imgbb.com</a>.
                </p>
                <p>
                    <em>
                        The Office (US) &#38; Dunder Mifflin Paper Company are property of NBC and was developed for television by Greg Daniels.
                    </em>
                </p>
                <p>
                    Developed and Designed by <a href="https://jonnahmarie.github.io/">Jonnah Marie Pangilinan</a>, April 2021<br />
                    Powered by <a href="https://reactjs.org/">React <i className="fab fa-react"></i></a>
                </p>
            </Container>
        </div>
    );
}

export default Footer;