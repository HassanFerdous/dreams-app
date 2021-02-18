import React from 'react';
import SectionHeading from '../../components/heading/section-heading';
import TeamItem from '../../components/team-item/TeamItem';

const Team = () => {
	return (
		<div className="team">
			<div className="team__heading">
				<SectionHeading title="Our Greate Team" subtitle="Our Greate Team" />
				<TeamItem />
			</div>
		</div>
	);
};

export default Team;
