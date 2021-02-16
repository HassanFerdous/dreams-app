import React from 'react';
import CustomButton from '../button/CustomButton';

const Banner = ({title, subtitle, bannerSrc}) => {
    return (
        <div className="banner">
            <div className="banner__img">
                <picture>
                    <img src={bannerSrc} alt=""/>
                </picture>
            </div>
            <div className="banner__content">
                <h2 className="banner-subtitle">{subtitle}</h2>
                <h1 className="banner-title">{title}</h1>
                <div className="banner-buttons">
                    <CustomButton btnPrimary>Contact Us</CustomButton>
                    <CustomButton btnSecondary>See Courese</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Banner;