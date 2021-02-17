import React from 'react';

const FormInput = ({ type, placeholder, name, label, ...otherInputProps }) => {
	return (
		<div className="form-group">
			{label ? <label htmlFor={`${name ? name : null}`}>{label}</label> : null}
			<input
				className="form-control"
				type={type}
				placeholder={placeholder}
				name={name ? name : null}
				{...otherInputProps}
			/>
		</div>
	);
};

export default FormInput;
