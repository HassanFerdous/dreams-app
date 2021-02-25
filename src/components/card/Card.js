import React from 'react';
import { connect } from 'react-redux';

import '../../scss/components/_card.scss';

const Card = ({ cards }) => {
	return cards.map((card, idx) => {
		const { imgSrc, subtitle, title, timeStamp } = card;
		return (
			<figure className="card" key={idx}>
				<div className="card__image" style={{ backgroundImage: `url(${imgSrc})` }}></div>
				<figcaption className="card__content">
					<h6 className="card-subtitle">{subtitle}</h6>
					<h4 className="card-title">{title}</h4>
					<span className="time-stamp">{timeStamp}</span>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
						maecenas accumsan lacus...
					</p>
					<button className="card-btn">Read More</button>
				</figcaption>
			</figure>
		);
	});
};

const mapStateToProps = state => ({
	cards: state.cards,
});

export default connect(mapStateToProps)(Card);
