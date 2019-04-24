import React from 'react'
import PropTypes from 'prop-types'



const Team = ({ input }) => {
	let items = []
	for (const [index, item] of input.items.entries()) {

		items.push(
			<div data-wow-delay="0.3s" className="text-center cms-grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wow fadeInUp" key={index}>
				<div className="cms-grid-media has-thumbnail">
					<img width="300" height="300" src={item.portrait.url} alt="" />
				</div>
				<h4 className="cms-grid-title">{item.first_and_lastname.text}</h4>
				<div className="cms-grid-team-position">{item.position.text}</div>
				<div className="cms-grid-team-social">
					{/* <a href="#" target="_blank"><i className="fa fa-facebook-square"></i></a>
					<a href="#" target="_blank"><i className="fa fa-instagram"></i></a> */}
				</div>
			</div>
		)
	}
	return (
		<div className="section section-our-team">
			<div className="container">
				<div className="row">
					<div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
						<h1 className="text-center">{input.primary.team_section.text}</h1>
						<br></br>
						{/* <p className="desc mb-7">Meet the cool team members</p> */}
					</div>
				</div>
				<div className="row">
					<div className="cms-grid-wraper cms-grid-team">
						<div className="cms-grid cms-grid">
							{items}

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team

Team.propTypes = {
	input: PropTypes.object
}
