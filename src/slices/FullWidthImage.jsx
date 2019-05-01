import React from 'react'
import PropTypes from 'prop-types'

const FullWidthImage = ({ input }) => (
	<div className="section section-parallax-1 text-center cms_parallax mb-8" style={{backgroundImage: 'url(' + input.primary.image.url   +')'}}>
					<div className="cms-bg-overlay"></div>
					<div className="no-container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-12 wow flipInX">
								<span>{input.primary.headtext}</span>
							</div>
						</div>
					</div>
				</div>
)

export default FullWidthImage

FullWidthImage.propTypes = {
    input: PropTypes.object
}
