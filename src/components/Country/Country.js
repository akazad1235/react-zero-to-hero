import React from 'react';
import './Country.css';
const Country = (props) => {
    const {population, area} = props.country;
    return (
        <div className=''>
            <p>population: {population}</p>
            <p>area: {area}</p>
            
        </div>
    );
};

export default Country;