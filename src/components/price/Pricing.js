import React from 'react';

import SectionHeading from '../heading/section-heading';
import Card from './Card';

import primaryBg from '../../images/pricing-bg.jpg';
import '../scss/style.scss';

const Pricing = ({ sectionHeading, primary, trapsparent, title, subTitle }) => {
	return (
		<div
			className={`price ${trapsparent ? 'price--transparent' : null}`}
			style={primary ? { backgroundImage: `url(${primaryBg})` } : { background: `transparent` }}>
			{sectionHeading ? <SectionHeading title={title} subtitle={subTitle} /> : null}
			<Card />
		</div>
	);
};

export default Pricing;
