import React from 'react'
import PropTypes from 'prop-types'



const Team = ({ input }) => (
	<div className="section section-our-team">
					<div className="container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
								<h1 className="text-center">OUR TEAM</h1>
								<p className="desc mb-7">Meet the cool team members</p>
							</div>
						</div>
						<div className="row">
							<div className="cms-grid-wraper cms-grid-team">
								<div className="cms-grid cms-grid">
									<div data-wow-delay="0.3s" className="text-center cms-grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
										<div className="cms-grid-media has-thumbnail">
											<img width="300" height="300" src="../images/team/team_180x180.jpg" alt="" />
										</div>
										<h4 className="cms-grid-title">JAMES DEAN</h4>
										<div className="cms-grid-team-position">Founder</div>
										<div className="cms-grid-team-social">
											<a href="#" target="_blank"><i className="fa fa-facebook-square"></i></a>
											<a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
										</div>
									</div>
									<div data-wow-delay="0.3s" className="text-center cms-grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
										<div className="cms-grid-media has-thumbnail">
											<img width="300" height="300" src="../images/team/team_180x180.jpg" alt="" />
										</div>
										<h4 className="cms-grid-title">EMILIA CLIFF</h4>
										<div className="cms-grid-team-position">Sale manager</div>
										<div className="cms-grid-team-social">
											<a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
											<a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
										</div>
									</div>
									<div data-wow-delay="0.3s" className="text-center cms-grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
										<div className="cms-grid-media has-thumbnail">
											<img width="300" height="300" src="../images/team/team_180x180.jpg" alt="" />
										</div>
										<h4 className="cms-grid-title">JOHN DOE</h4>
										<div className="cms-grid-team-position">Creative director</div>
										<div className="cms-grid-team-social">
											<a href="#" target="_blank"><i className="fa fa-facebook-square"></i></a>
											<a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
										</div>
									</div>
									<div data-wow-delay="0.3s" className="text-center cms-grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
										<div className="cms-grid-media has-thumbnail">
											<img width="300" height="300" src="../images/team/team_180x180.jpg" alt="" />
										</div>
										<h4 className="cms-grid-title">JULIA WILSON</h4>
										<div className="cms-grid-team-position">Developer</div>
										<div className="cms-grid-team-social">
											<a href="#" target="_blank"><i className="fa fa-facebook-square"></i></a>
											<a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
)

export default Team

Team.propTypes = {
  input: PropTypes.object
}
