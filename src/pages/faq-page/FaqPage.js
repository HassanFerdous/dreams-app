import React from 'react';
import Faq from '../../components/faq/Faq';
import FaqForm from '../../components/faq/FaqForm';
import Footer from '../../components/footer/Footer';
import '../../scss/style.scss';

const FaqPage = () => {
	return (
		<>
			<div className="faqs">
				<div className="container">
					<div className="faq-grid">
						<Faq />
						<FaqForm />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default FaqPage;
