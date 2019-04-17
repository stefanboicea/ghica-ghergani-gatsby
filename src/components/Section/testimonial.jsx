import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class TestimonialSection extends Component {
	render() {
		const { data } = this.props
		let items = []
		let itemsli = []
		for (const [index, item] of data.testimonials.entries()) {
			let className = 'item'
			let classNameLi = ''
			if (index === 0) {
				className = 'item active'
				classNameLi = 'active'
			}

			itemsli.push(
				<li data-target="#testimonial-carousel" data-slide-to={index} className={classNameLi} key={index}></li>
			)

			items.push(
				<div className={className} key={index}>

					<div className="testimonial-figure">

						<h3 className="parallax-title author-name">
							{item.name}
												</h3>
						<p className="authors-review">
							{item.description}
												</p>{/*/.authors-review */}
						<div className="author-avatar">
							<img className="img-circle" src={item.avatar.url} />
						</div>{/*/.author-avatar */}
					</div>{/*/.testimonial-figure */}
				</div>
			)
        }
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
												{itemsli}

											</ol>{/*/.carousel-indicators */}
											<div className="carousel-inner">

												{items}
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

