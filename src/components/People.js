import React from 'react';
import Person from './Person';

const People = (props) => {
    const length = Object.keys(props).length; // gets the length of props
    const people = [];
    for (let i=0; i<length; i++) {
        people.push(<Person key={i} {...props[i]} />)
    }
        return (
            <div className='people'>
                {people}
            </div>
        );
}

export default People;