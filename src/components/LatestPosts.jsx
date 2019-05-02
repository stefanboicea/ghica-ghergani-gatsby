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

            let coverVideo = <iframe width="370" height="250" src={post.data.cover_video ? post.data.cover_video.url : ''} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			let coverImage = <img width="370" height="250" src={post.data.coverimage ? post.data.coverimage.url : ''} alt="" />

			items.push(
				<div data-wow-delay="0.3s" class="text-center cms-grid-item col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInUp" key={index}>
											<div class="cms-grid-media overlay-wrap has-thumbnail">
                                            {post.data.post_type === 'video' ? coverVideo : coverImage}
												{/* <div class="overlay">
													<div class="overlay-content">
														<a class="icon circle" href="blog-detail.html">
															<i class="fa fa-link"></i>
														</a>
														<a class="icon circle prettyphoto" href="../images/blog/blog_835x640.jpg">
															<i class="fa fa-search"></i>
														</a>
													</div>
												</div> */}
											</div>
											<h4 class="cms-grid-title">
												<a href={link}>{post.data.title.text}</a>
											</h4>
							                <div class="cms-grid-meta cms-meta">
							                    <span class="post-date">{post.date}</span>
							                    {/* <span class="post-author">admin</span>
							                    <span class="post-category"><a href="#">Featured</a></span> */}
							                </div>
							                <div class="cms-grid-link">
							                    <a class="more-link" href={link}>Detalii</a>
							                </div>
										</div>
			)
		}

		return (
			<React.Fragment>
		<div class="section pt-8 text-center">
					<div class="container">
						<div class="row">
							<div data-wow-delay="0.3s" class="col-sm-12 wow fadeInUp">
								<h1>Noutati</h1>
								{/* <p class="desc">Latest updates from the blog</p> */}
							</div>
						</div>
				    </div>
				</div>
				<div class="section pt-7 pb-10">
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<div class="cms-grid-wraper cms-grid-blog">
									<div class="row cms-grid">
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

