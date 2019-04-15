import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class PricingSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
               			{/*Pricing Section */}
				<section id="pricing">
					<div className="pricing-section">
						<div className="grey-bg angular section-padding">


							<div className="bottom-angle">
							</div>
						</div>
					</div>{/*/.pricing-section */}
				</section>
				{/*Pricing Section End */}
            </React.Fragment>
        )
    }
}

PricingSection.propTypes = {
    data: PropTypes.any.isRequired
}

