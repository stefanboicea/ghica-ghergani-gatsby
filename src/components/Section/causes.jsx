import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class CausesSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
               				{/*Causes Section*/}
				<section id="causes">
					<div className="causes-section gray-bg  angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="content-box">
										<div className="hex content-icon-hex hex-margin">
											<div className="content-icon">
												<span aria-hidden="true" className="li_megaphone"></span>
											</div>
										</div>
										<h3 className="content-title">
											Our Causes
								</h3>
										<p className="content-description">
											We have a fixed plan to improve the child world. Moreover, we are careful about the sudden disaster and harmful environment.
								</p>
										<div className="slide-nav-container">
											<a className="slide-nav left slide-left" href="#causes-post-slider" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
											<a className="slide-nav right slide-right" href="#causes-post-slider" data-slide="next"><i className="fa fa-chevron-right"></i></a>
										</div>{/*/.slide-nav-container */}
									</div>
								</div>{/*/.col-md-4 */}

								<div className="col-md-8">
									<div className="row">
										<div id="causes-post-slider" className="owl-carousel owl-theme">
											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-1.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">10% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-1" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}

											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-2.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">66% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-2" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}
											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-3.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">66% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-3" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}

											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-4.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">66% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-4" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}

										</div>{/*/.causes-post-slider */}
									</div>{/*/row */}
								</div>{/*/.col-md-8 */}
							</div>
						</div>

					</div>{/*/.causes-section */}
				</section>{/*/#causes */}
				{/*Causes Section End*/}

            </React.Fragment>
        )
    }
}

CausesSection.propTypes = {
    data: PropTypes.any.isRequired
}

