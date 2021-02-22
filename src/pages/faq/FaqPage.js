import React from 'react';
import Faq from '../../components/faq-item/Faq';
import SectionHeading from '../../components/heading/section-heading';

const FaqPage = () => {
	return (
		<div className="faqs">
			<div className="container">
				<SectionHeading title="Frequently asked questions" subtitle="CUSTOMER SUPPORT" />
				<Faq />
			</div>
		</div>
	);
};

export default FaqPage;
