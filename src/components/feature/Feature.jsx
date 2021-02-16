import React from 'react';

const Feature = ({text, featureImg}) => {
    return(
        <div className="feature">
            <picture className="feature__img">
                <img src={featureImg} alt="feature-img"/>
            </picture>
            <span className="feature__text">{text}</span>
        </div>
    )
};

export default Feature;