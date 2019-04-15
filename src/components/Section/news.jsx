import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class NewsSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
               			{/*News Section*/}
				<section id="news">
					<div className="news-section white-bg angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="section-head">
								<h2 className="section-title">
									News
						</h2>{/*/.section-title */}
								<p className="section-description">
									CHECK THE NEWS OF CHILDREN WHAT GOING ON THE WORLD WITH THEM. COLLECT CHARITY WEBSITE TEMPLATES TO BUILD YOUR OWN CHARITY ORGANIZATION.
						</p>
							</div>{/*/.section-head */}

							<div className="row">
								<div className="news-container">
									<div className="news-item col-md-6 from-bottom delay-200">
										<img className="news-item-image" src="images/news/news-post-1.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-film"></i>
														</span>
													</div>

													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>
												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}

									<div className="news-item col-md-6 from-bottom delay-600">
										<img className="news-item-image" src="images/news/news-post-2.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-picture-o"></i>
														</span>
													</div>
													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>
												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}

									<div className="news-item col-md-6 from-bottom delay-200">
										<img className="news-item-image" src="images/news/news-post-3.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-film"></i>
														</span>
													</div>
													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>

												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}

									<div className="news-item col-md-6 from-bottom delay-600">
										<img className="news-item-image" src="images/news/news-post-4.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-headphones"></i>
														</span>
													</div>
													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>
												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}
									<div className="view-all">
										<a href="blog-page.html" className="btn custom-btn angle-effect">View All News</a>
									</div>
								</div>{/*/.news-container */}
							</div>
						</div>
					</div>{/*/.news-section */}
				</section>{/*/#news */}
				{/*News Section End*/}
            </React.Fragment>
        )
    }
}

NewsSection.propTypes = {
    data: PropTypes.any.isRequired
}

