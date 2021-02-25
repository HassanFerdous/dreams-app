import React, { Fragment } from 'react';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

const News = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="cards">
					<Card />
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default News;
