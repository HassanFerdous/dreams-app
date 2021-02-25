import React from 'react';
import '../../scss/style.scss';

const TextField = ({ placeholder, name, type, label, ...otherInputProps }) => {
	return (
		<div className="form-group">
			{label ? <label htmlFor={`${name ? name : null}`}>{label}</label> : null}
			<textarea
				className="form-control"
				type={type}
				placeholder={placeholder}
				name={name ? name : null}
				{...otherInputProps}></textarea>
		</div>
	);
};

export default TextField;
