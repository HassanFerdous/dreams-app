import React from 'react';

const Feature = ({features}) => {
    return features.map((feature, idx) => (
        <div className="feature" key={idx}>
            <picture className="feature__img">
                <img src={feature.featureImg} alt="feature-img"/>
            </picture>
            <span className="feature__text">{feature.text}</span>
        </div>
    ))
};

export default Feature;