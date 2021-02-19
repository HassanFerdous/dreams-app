import React from 'react';

import '../../scss/style.scss';
import SectionHeading from '../heading/section-heading';
import Form from '../form/Form';

const Application = ({ primary, tranasparent }) => {
	return (
		<div
			className={`application ${primary ? 'application--primary' : null} ${
				tranasparent ? 'application--tranparent' : null
			}`}>
			<div className="container">
				<SectionHeading title="APPLICATION FORM" subtitle="GIVING BEST OPTIONS FOR YOU" />
				<Form />
			</div>
		</div>
	);
};

export default Application;
