import React from 'react';
import '../scss/style.scss';

const CustomButton = ({ children, btnPrimary, btnSecondary, ...otherPorps }) => (
	<button
		className={`btn ${btnPrimary ? 'btn--primary' : null} ${btnSecondary ? 'btn--secondary' : null}`}
		{...otherPorps}>
		{children}
	</button>
);
export default CustomButton;
