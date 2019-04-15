import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class TeamSection extends Component {
	render() {
		const { data } = this.props
		return (
			<React.Fragment>
				{/*Team Section */}
				<section id="team">
					<div className="team-section">
						<div className="white-bg angular section-padding">
							<div className="top-angle">
							</div>{/*/.top-angle */}
							<div className="container">
								<div className="section-head">
									<h2 className="section-title">{data.title}</h2>
									<p className="section-description">
										{data.subtitle}
									</p>
								</div>

								<div id="team-slider" className="owl-carousel owl-theme">
									<div className="item">
										<div className="team-member-box from-bottom delay-200">
											<figure>
												<img src="images/team-member/02.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Jens Parker</h3>
											<h4 className="member-designation">Founder</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>

									<div className="item">
										<div className="team-member-box from-bottom delay-600">
											<figure>
												<img src="images/team-member/01.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Anja Umland</h3>
											<h4 className="member-designation">Designer</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>

									<div className="item">
										<div className="team-member-box from-bottom delay-1000">
											<figure>
												<img src="images/team-member/03.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Jens Max</h3>
											<h4 className="member-designation">Developer</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>

									<div className="item">
										<div className="team-member-box from-bottom delay-1400">
											<figure>
												<img src="images/team-member/04.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Jens Kahaly</h3>
											<h4 className="member-designation">Programmer</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>
								</div>{/*/#team-slider */}

							</div>
						</div>{/*./white-bg */}
					</div>{/*/.team-section */}
				</section>{/*/#team*/}
				{/*Team Section End */}
			</React.Fragment>
		)
	}
}

TeamSection.propTypes = {
	data: PropTypes.any.isRequired
}

