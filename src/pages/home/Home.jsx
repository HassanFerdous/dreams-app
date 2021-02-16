import React from 'react';
import Banner from '../../components/banner/Banner';
import CustomButton from '../../components/button/CustomButton';
import SectionHeading from '../../components/heading/section-heading';
import Feature from '../../components/feature/Feature';

//Images
import bannerImg from '../../images/hero-bg.jpg';
import featureImg from '../../images/feature/feature-1.png'


function Home(props) {
    return (
        <div>
            <Banner subtitle='BEST OPTIONS FOR YOU' title='DRIVE SAFE & GET LICENSE' bannerSrc={bannerImg} />
            <div className="container">
                <div className="features">
                    <div className="feature-content">
                        <SectionHeading title='OUR FEATURE' subtitle='WHY CHOOSE US ?' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas facilisis.</p>
                        <CustomButton btnPrimary>See Courses</CustomButton>
                    </div>
                    <div className="feature-grid">
                        <Feature text="UNLIMITED CAR SUPPORT" featureImg={featureImg} />
                        <Feature text="UNLIMITED CAR SUPPORT" featureImg={featureImg} />
                        <Feature text="UNLIMITED CAR SUPPORT" featureImg={featureImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;