import React from 'react';
import Banner from '../../components/banner/Banner';
import CustomButton from '../../components/button/CustomButton';
import SectionHeading from '../../components/heading/section-heading';
import Feature from '../../components/feature/Feature';

//Images
import bannerImg from '../../images/hero-bg.jpg';
import featureImg from '../../images/feature/feature-1.png';
import Lesson from '../../components/lesson/lesson';
import Application from '../../components/application/Application';
import Pricing from '../../components/price/Pricing';
import Team from '../team/Team';

function Home(props) {
	const features = [];
	for (let i = 0; i < 3; i++) {
		features.push(<Feature text="UNLIMITED CAR SUPPORT" featureImg={featureImg} key={i} />);
	}

	return (
		<div>
			<Banner subtitle="BEST OPTIONS FOR YOU" title="DRIVE SAFE & GET LICENSE" bannerSrc={bannerImg} />
			<div className="container">
				<div className="features">
					<div className="feature-content">
						<SectionHeading title="OUR FEATURE" subtitle="WHY CHOOSE US ?" />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua viverra maecenas facilisis.
						</p>
						<CustomButton btnPrimary>See Courses</CustomButton>
					</div>
					<div className="feature-grid">{features.map(feature => feature)}</div>
				</div>
				<Lesson />
				<Application tranasparent />
			</div>
			<Pricing primary />
			<Team />
		</div>
	);
}

export default Home;
