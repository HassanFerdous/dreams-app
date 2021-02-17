import React from 'react';
import CustomButton from '../button/CustomButton';
import Select from '../custom-select/Select';
import CustomnDatePicker from '../datePicker/DatePicker';
import FormInput from './FormInput';
// import CustomSelectBox from '../selectBox/CustomSelectBox';

import '../scss/style.scss';

const Form = ({ formPrimary, formTransparent, title, subtitle }) => {
	return (
		<form
			className={`form ${formPrimary ? 'form--primary' : null} ${formTransparent ? 'form--tranasparent' : null}`}
			action="#">
			<div className="form__row">
				<FormInput placeholder="Your Name" type="name" />
				<FormInput placeholder="Your Email" type="Email" />
				<FormInput placeholder="Your Phone" type="name" />
			</div>
			<div className="form__row">
				<div className="form-group">
					<CustomnDatePicker placeholder="Data & Time" className="form-control" />
				</div>
				<div className="form-group">
					<Select />
				</div>
				<div className="form-group">
					<Select />
				</div>
			</div>

			<CustomButton btnPrimary>Send Inquire</CustomButton>
		</form>
	);
};

export default Form;
