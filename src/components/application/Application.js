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
			<SectionHeading title="APPLICATION FORM" subtitle="GIVING BEST OPTIONS FOR YOU" />
			<Form />
		</div>
	);
};

export default Application;
