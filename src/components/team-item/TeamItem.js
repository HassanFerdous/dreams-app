import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TeamItem = ({ teamMembers }) => {
	return (
		<div className="instructors">
			{teamMembers.map((member, idx) => (
				<div className="instructor" key={idx}>
					<div className="instructor__img">
						<img src={member.img} alt="team" />
					</div>
					<div className="instructor__info">
						<h3 className="instructor-name">{member.name}</h3>
						<h4 className="instructor-status">{member.status}</h4>
						<p className="instructor-text">{member.text}</p>
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
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	teamMembers: state.teamMembers,
});
export default connect(mapStateToProps)(TeamItem);
