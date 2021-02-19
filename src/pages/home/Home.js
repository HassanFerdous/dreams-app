import React from 'react';
import Banner from '../../components/banner/Banner';
import CustomButton from '../../components/button/CustomButton';
// import SectionHeading from '../../components/heading/section-heading';

import Lesson from '../../components/lesson/lesson';
import Application from '../../components/application/Application';
import Pricing from '../../components/price/Pricing';
import Team from '../team/Team';
import path from '../../components/path/path';
import Features from '../../components/feature/Featurs';
import { connect } from 'react-redux';

function Home({ features }) {
	// const features = [];
	// for (let i = 0; i < 3; i++) {
	// 	features.push(<Feature text="UNLIMITED CAR SUPPORT" key={i} />);
	// }

	return (
		<div>
			<Banner
				subtitle="BEST OPTIONS FOR YOU"
				title="DRIVE SAFE & GET LICENSE"
				bannerSrc={`${path + '/images/hero-bg.jpg'}`}
			/>

			<Features features={features} />

			<Lesson />
			<Application tranasparent />
			<Pricing primary />
			<Team />
		</div>
	);
}

const mapStateToProps = state => ({
	features: state.features,
});

export default connect(mapStateToProps)(Home);
