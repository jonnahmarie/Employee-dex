import React from 'react';
import Logo from '../assets/img/Dunder_Mifflin_logo.png';

function Header() {
    return (
        <div>
            <header>
                <div>
                    <img src={Logo} alt="Dunder Mifflin Paper Co. Logo" />
                </div>
            </header>
        </div>
    );
}

export default Header;