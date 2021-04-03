import React from 'react';

function Card({ image, first_name, last_name, title, department, email, phone }) {

    return (
        <div>
            <img src={image} alt="employee" />
            <p>Hello World</p>
            <p>{title}</p>
            <p>{department}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

export default Card;