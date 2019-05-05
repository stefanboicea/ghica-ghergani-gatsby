import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export default class LatestPosts extends Component {
	render() {
		const { data } = this.props
		let items = []
		let itemsli = []
		for (const [index, edge] of data.edges.entries()) {
            const item = edge.node.data
            const post = edge.node
            const link = '/blog/' + edge.node.uid

            let coverVideo = <iframe width="370" height="250" src={post.data.cover_video ? post.data.cover_video.url : ''} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			let coverImage = <img width="370" height="250" src={post.data.coverimage ? post.data.coverimage.url : ''} alt="" />

			items.push(
				<div data-wow-delay="0.3s" className="text-center cms-grid-item col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInUp" key={index}>
											<div className="cms-grid-media overlay-wrap has-thumbnail">
                                            {post.data.post_type === 'video' ? coverVideo : coverImage}
												{/* <div className="overlay">
													<div className="overlay-content">
														<a className="icon circle" href="blog-detail.html">
															<i className="fa fa-link"></i>
														</a>
														<a className="icon circle prettyphoto" href="../images/blog/blog_835x640.jpg">
															<i className="fa fa-search"></i>
														</a>
													</div>
												</div> */}
											</div>
											<h4 className="cms-grid-title">
												<a href={link}>{post.data.title.text}</a>
											</h4>
							                <div className="cms-grid-meta cms-meta">
							                    <span className="post-date">{post.date}</span>
							                    {/* <span className="post-author">admin</span>
							                    <span className="post-category"><a href="#">Featured</a></span> */}
							                </div>
							                <div className="cms-grid-link">
							                    <a className="more-link" href={link}>Detalii</a>
							                </div>
										</div>
			)
		}

		return (
			<React.Fragment>
		<div className="section pt-8 text-center">
					<div className="container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
								<h1>Noutati</h1>
								{/* <p className="desc">Latest updates from the blog</p> */}
							</div>
						</div>
				    </div>
				</div>
				<div className="section pt-7 pb-10">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="cms-grid-wraper cms-grid-blog">
									<div className="row cms-grid">
								{items}
								
                                </div>
							    </div>
							</div>
						</div>
				    </div>
				</div>
			</React.Fragment>
		)
	}
}

LatestPosts.propTypes = {
	data: PropTypes.any.isRequired
}

