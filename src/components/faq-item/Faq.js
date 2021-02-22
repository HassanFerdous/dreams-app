import React, { useState } from 'react';
import faqs from '../../pages/faq/faqData';

import '../../scss/style.scss';

const Faq = () => {
	const [panels] = useState(faqs);
	const [select, setSelect] = useState(null);
	const [height, setHeight] = useState(0);

	const toggleOpen = (e, idx) => {
		const selected = document.querySelectorAll('.panel__content')[idx];
		setHeight(selected.scrollHeight);
		if (select === idx) {
			return setSelect(null);
		}

		setSelect(idx);
	};

	return (
		<div className="panels">
			{panels.map((panel, idx) => (
				<div
					className={`panel`}
					key={idx}
					onClick={e => {
						toggleOpen(e, idx);
					}}>
					<div className="panel__heading">
						{panel.label}
						<span
							className={`${select === idx ? 'collapse-bar--open collapse-bar' : 'collapse-bar'}`}></span>
					</div>
					<div className="panel__content" style={{ maxHeight: `${select === idx ? height : 0}px` }}>
						{panel.content}
					</div>
				</div>
			))}
		</div>
	);
};

export default Faq;
