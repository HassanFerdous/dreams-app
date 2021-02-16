import React from 'react';
import '../scss/style.scss';

const SectionHeading = ({title, subtitle}) => {
    return (
        <div className="section-heading">
            <h3 className="section-subtitle">{subtitle}</h3>
            <h2 className="section-title">{title}</h2>
        </div>
    )
}


export default SectionHeading;