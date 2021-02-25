import React from 'react';
import CustomButton from '../button/CustomButton';
import FormInput from '../form/FormInput';
import TextField from '../form/TextField';
import SectionHeading from '../heading/section-heading';

const FaqForm = () => {
	return (
		<form action="#" className="faq-form">
			<SectionHeading title="Have a Quetion?" subtitle="ADD QUESTION" />
			<div className="form-row">
				<FormInput type="text" placeholder="Name"></FormInput>
				<FormInput type="Email" placeholder="Email"></FormInput>
				<FormInput type="text" placeholder="Website"></FormInput>
				<TextField type="text" placeholder="Question"></TextField>
				<CustomButton btnPrimary>Send Question</CustomButton>
			</div>
		</form>
	);
};

export default FaqForm;
