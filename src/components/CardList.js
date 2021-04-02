import React from 'react';
import Card from './Card';

function CardList({data}) {
    return (
        data.map(employee => {
            <Card 
                key={employee.id}
                image={employee.image}
                name={employee.name}
                title={employee.title}
                department={employee.department}
                email={employee.email}
                phone={employee.phone}
            />
        })
    );
}

export default CardList;