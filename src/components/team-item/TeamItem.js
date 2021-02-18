import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import instructorImg from '../../images/team/team-1.png';

const TeamItem = () => {
	const [instrutorData] = useState([
		{
			img: instructorImg,
			name: 'David Warner',
			status: 'Instructor',
			text: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.',
		},
	]);

	const instructors = [];

	for (let i = 1; i <= 6; i++) {
		instructors.push(
			<div className="instructor" key={i}>
				<div className="instructor__img">
					<img src={instrutorData.img} alt="instructor" />
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
		);
	}

	console.log(instructors);

	return <div className="instructors">{instructors.map(instructor => instructor)}</div>;
};

export default TeamItem;
