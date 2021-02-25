import React from 'react';
import CustomButton from '../../components/button/CustomButton';
import SectionHeading from '../../components/heading/section-heading';
import TeamItem from '../../components/team-item/TeamItem';

const Team = () => {
	return (
		<div className="team">
			<div className="container">
				<div className="team__heading">
					<SectionHeading title="Our Greate Team" subtitle="Our Greate Team" />
					<CustomButton btnPrimary>View All</CustomButton>
				</div>
				<TeamItem />
			</div>
		</div>
	);
};

export default Team;
