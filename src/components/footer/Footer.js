import React from 'react';
import path from '../path/path';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container container">
				<div className="footer-top">
					<div className="footer-widget">
						<span className="footer__title">Company</span>
						<ul className="footer-list">
							<Link to="#" className="footer-list__link">
								About us
							</Link>

							<Link to="#" className="footer-list__link">
								Company
							</Link>

							<Link to="#" className="footer-list__link">
								Press &amp; Blog
							</Link>

							<Link to="#" className="footer-list__link">
								Privacy Policy
							</Link>
						</ul>
					</div>
					<div className="footer-widget">
						<span className="footer__title">OPEN HOUR</span>
						<ul className="footer-list">
							<Link to="#" className="footer-list__link">
								Monday 11am-7pm
							</Link>

							<Link to="#" className="footer-list__link">
								Tuesday-Friday 11am-8pm
							</Link>

							<Link to="#" className="footer-list__link">
								Saturday 10am-6pm
							</Link>

							<Link to="#" className="footer-list__link">
								Sunday 11am-6pm
							</Link>
						</ul>
					</div>
					<div className="footer-widget">
						<span className="footer__title">OPEN HOUR</span>
						<ul className="footer-list">
							<Link to="#" className="footer-list__link">
								Home Insurance
							</Link>

							<Link to="#" className="footer-list__link">
								Travel Insurance
							</Link>

							<Link to="#" className="footer-list__link">
								Car Insurance
							</Link>

							<Link to="#" className="footer-list__link">
								Business Insurance
							</Link>

							<Link to="#" className="footer-list__link">
								Heal Insurance
							</Link>
						</ul>
					</div>
					<div className="footer-widget">
						<span className="footer-logo">
							<img src={path + '/images/footer-logo.png'} alt="footer logo" />
						</span>
						<ul className="footer-list">
							<li className="footer-list__link">
								Address : 15 Division Street, New York, NY 12032, United States of America
							</li>
							<li className="footer-list__link">Phone : +0 (123) 456789</li>
							<li className="footer-list__link">Email : Kaseo@gmail.com</li>
							<li className="footer-list__link">Fax : +8 (123) 456 789</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="copy--right text-center py-5">
						<p>
							Copyright ©2020 All rights reserved | This template is made by ©{' '}
							<Link to="smartendesign.com">smartendesign.com</Link>
						</p>
					</div>
					;
				</div>
			</div>
		</div>
	);
};

export default Footer;
