import React from 'react'
import PropTypes from 'prop-types'

const FullWidthImage = ({ input }) => (
	<div className="section section-parallax-3 text-center">
					<div className="cms-bg-overlay"></div>
					<div className="no-container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-12 wow flipInX">
								<span>Happiness in the joy of achievement</span>
							</div>
						</div>
					</div>
				</div>
)

export default FullWidthImage

FullWidthImage.propTypes = {
    input: PropTypes.object
}
