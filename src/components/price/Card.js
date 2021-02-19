import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../button/CustomButton';

import '../../scss/style.scss';

const Card = ({ prices }) => {
	console.log(prices);
	return (
		<div className="container cards">
			{prices.map((price, idx) => (
				<div className="card" key={idx}>
					<div className="card__header">
						<span className="card-discount">{price.discount} discount</span>
						<h2 className="card-price">{price.price}</h2>
						<h3 className="card-offer">{price.offer}</h3>
					</div>
					<ul className="card__list">
						{price.services.map((service, idx) => (
							<li key={idx}>{service}</li>
						))}
					</ul>
					<CustomButton btnPrimary>Get Started</CustomButton>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	prices: state.prices,
});

export default connect(mapStateToProps)(Card);
