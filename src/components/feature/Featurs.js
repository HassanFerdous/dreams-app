import React from 'react';
import Feature from './Feature';
import '../../scss/style.scss';
import SectionHeading from '../heading/section-heading';
import CustomButton from '../button/CustomButton';

const Features = ({ features }) => {
	return (
		<div className="features">
			<div className="container feature-container">
				<div className="feature-content">
					<SectionHeading title="OUR FEATURE" subtitle="WHY CHOOSE US ?" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua viverra maecenas facilisis.
					</p>
					<CustomButton btnPrimary>See Courses</CustomButton>
				</div>
				<div className="feature-grid">
					<Feature features={features} />
				</div>
			</div>
		</div>
	);
};

export default Features;
