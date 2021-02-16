import React from 'react';
import Banner from '../../components/banner/Banner';
import bannerImg from '../../images/hero-bg.jpg';

function Home(props) {
    return (
        <div>
            <Banner subtitle='BEST OPTIONS FOR YOU' title='DRIVE SAFE & GET LICENSE' bannerSrc={bannerImg} />
        </div>
    );
}

export default Home;