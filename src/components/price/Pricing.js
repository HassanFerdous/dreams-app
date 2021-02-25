import React from 'react';

import SectionHeading from '../heading/section-heading';
import PriceCard from './PriceCard';
import path from '../path/path';

import '../../scss/style.scss';

const Pricing = ({ sectionHeading, primary, trapsparent, title, subTitle }) => {
	return (
		<div
			className={`price ${trapsparent ? 'price--transparent' : null}`}
			style={
				primary ? { backgroundImage: `url(${path + '/images/pricing-bg.jpg'})` } : { background: `transparent` }
			}>
			{sectionHeading ? <SectionHeading title={title} subtitle={subTitle} /> : null}
			<PriceCard />
		</div>
	);
};

export default Pricing;
