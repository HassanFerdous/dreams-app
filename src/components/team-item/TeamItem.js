import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamItem = () => {
	const [instrutorData] = useState([]);

	return (
		<div className="instructors">
			<div className="instructor">
				<div className="instructor__img">
					<img src={instrutorData.img} alt="team" />
				</div>
				<div className="instructor__info">
					<h3 className="instructor-name">{instrutorData.name}</h3>
					<h4 className="instructor-status">{instrutorData.status}</h4>
					<p className="instructor-text">{instrutorData.text}</p>
					<div className="instructor-social">
						<Link to="#">
							<i className="fa fa-facebook"></i>
						</Link>
						<Link to="#">
							<i className="fa fa-twitter"></i>
						</Link>
						<Link to="#">
							<i className="fa fa-instagram"></i>
						</Link>
						<Link to="#">
							<i className="fa fa-dribbble"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamItem;
