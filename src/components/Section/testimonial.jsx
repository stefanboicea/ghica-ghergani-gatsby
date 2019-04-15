import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class TestimonialSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
               			{/*Testimonial Section*/}
				<section id="testimonial">
					<div className="testimonial-section parallax-style">
						<div className="parallax-overlay section-padding">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
											<ol className="carousel-indicators">
												<li data-target="#testimonial-carousel" data-slide-to="0" className="active"></li>
												<li data-target="#testimonial-carousel" data-slide-to="1"></li>
												<li data-target="#testimonial-carousel" data-slide-to="2"></li>
											</ol>{/*/.carousel-indicators */}
											<div className="carousel-inner">
												<div className="item active">
													<div className="testimonial-figure">

														<h3 className="parallax-title author-name">
															Max Sherman
												</h3>
														<p className="authors-review">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quam consectetur deserunt delectus, maxime natus aperiam libero molestiae beatae
												</p>{/*/.authors-review */}
														<div className="author-avatar">
															<img className="img-circle" src="images/testimonial-carousel/01.png" alt="carousel image" />
														</div>{/*/.author-avatar */}
													</div>{/*/.testimonial-figure */}
												</div>
												<div className="item">
													<div className="testimonial-figure">
														<h3 className="parallax-title author-name">
															Maria Johns
												</h3>
														<p className="authors-review">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quam consectetur deserunt delectus, maxime natus aperiam libero molestiae beatae
												</p>{/*/.authors-review */}
														<div className="author-avatar">
															<img className="img-circle" src="images/testimonial-carousel/02.png" alt="carousel image" />
														</div>{/*/.author-avatar */}
													</div>{/*/.testimonial-figure */}
												</div>
												<div className="item">
													<div className="testimonial-figure">
														<h3 className="parallax-title author-name">
															Lady Claudia
												</h3>
														<p className="authors-review">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quam consectetur deserunt delectus, maxime natus aperiam libero molestiae beatae
												</p>{/*/.authors-review */}
														<div className="author-avatar">
															<img className="img-circle" src="images/testimonial-carousel/03.png" alt="carousel image" />
														</div>{/*/.author-avatar */}
													</div>{/*/.testimonial-figure */}
												</div>
											</div>{/*/.carousel-inner */}
										</div>{/*/#testimonial-carousel */}
									</div>{/*/.col-md-12 */}
								</div>
							</div>
						</div>{/*/.parallax-overlay */}
					</div>{/*/.testimonial-section */}
				</section>{/*/#testimonial */}
				{/*Testimonial Section End*/}

            </React.Fragment>
        )
    }
}

TestimonialSection.propTypes = {
    data: PropTypes.any.isRequired
}

