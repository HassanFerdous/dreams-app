import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../button/CustomButton';

import '../../scss/style.scss';

const PriceCard = ({ prices }) => {
	return (
		<div className="container prices">
			{prices.map((price, idx) => (
				<div className="price-card" key={idx}>
					<div className="price-card__header">
						<span className="price-card-discount">{price.discount} discount</span>
						<h2 className="price-card-price">{price.price}</h2>
						<h3 className="price-card-offer">{price.offer}</h3>
					</div>
					<ul className="price-card__list">
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

export default connect(mapStateToProps)(PriceCard);
