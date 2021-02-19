import React from 'react';
import path from '../path/path';

const Feature = ({text}) => {
    return(
        <div className="feature">
            <picture className="feature__img">
                <img src={path + '/images/feature/feature-1.png'} alt="feature-img"/>
            </picture>
            <span className="feature__text">{text}</span>
        </div>
    )
};

export default Feature;