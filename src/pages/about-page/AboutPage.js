import React, { useState } from 'react';
import path from '../../components/path/path';
import Slider from '../../components/slider/Slider';
import Team from '../team/Team';

import '../../scss/components/_client.scss';
import Feature from '../../components/feature/Feature';
import { connect } from 'react-redux';
import SectionHeading from '../../components/heading/section-heading';

const slide = ({ client }) => {
	return (
		<div className="client">
			<h5 className="client__subtitle">Testimonial</h5>
			<h2 className="client__title">Client Says</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing, eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas lacus vel facilisis.
			</p>
			<div className="client__info">
				<h3 className="client-name">Jhone Doe</h3>
				<span>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
				</span>
			</div>
		</div>
	);
};

const AboutPage = ({ features }) => {
	return (
		<div className="container">
			<Team />
			<div className="clients" style={{ backgroundImage: `url(${path}/images/testimonial-bg.jpg)` }}>
				<Slider slide={slide} length={6} />
			</div>
			<div className="features--about">
				<SectionHeading title="OUR FEATURE" subtitle="WHY CHOOSE US ?" />
				<div className="items">
					<Feature features={features} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	features: state.features,
});

export default connect(mapStateToProps)(AboutPage);
