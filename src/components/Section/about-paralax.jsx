import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class AboutParalaxSection extends Component {
    render() { 
        const { data } = this.props
        return (
            <React.Fragment>
               	<section id="about-parallax">
					<div className="about-parallax parallax-style">
						<div className="parallax-overlay section-padding">
							<div className="container">
								<h3 className="parallax-title">
								{data.title}
						</h3>
								<p className="parallax-description">
								{data.subtitle} <br />
									<span className="amount">${data.donationtotal}</span> până acum!
						</p>
								<div className="progress-bar-container">
									<div className="progress">
										<div id="about-progress-1" className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="{data.donationpercent}" aria-valuemin="0" aria-valuemax="100">
											{/* <span className="sr-only">60% Complete (warning)</span> */}
										</div>
									</div>
								</div>{/*/.progress-bar-container */}
								<p>
									<a href="#donate" className="btn donate-btn">Donează și tu <i className="fa fa-heart"></i></a>
								</p>
							</div>
						</div>{/*/.parallax-overlay */}
					</div>{/*/.about-parallax */}
				</section>{/*/#about-parallax */}
				
            </React.Fragment>
        )
    }
}

AboutParalaxSection.propTypes = {
    data: PropTypes.any.isRequired
}

