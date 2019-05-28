import React from 'react';
import './Person.css';

const Person = (props) => {
    const { name, height, mass, birthyear, gender} = props;
    return (
        <div className='person'>
            <ul>
                <li>{name}</li>
                <li>Height: {height} cm</li>
                <li>Mass: {mass} kg</li>
                <li>Birthyear: {birthyear}</li>
                <li>Gender: {gender}</li>
            </ul>
        </div>
    );

}

export default Person;