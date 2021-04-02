import React from 'react';

function Card({name, image, title, department, email, phone}) {
    return (
        <div>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{title}</p>
            <p>{department}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

export default Card;