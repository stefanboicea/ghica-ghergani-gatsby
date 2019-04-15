import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class VolunteerSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
               	{/*Volunteer Section */}
				<section id="volunteer">
					<div className="volunteer-section">
						<div className="gray-bg angular section-padding">

							<div className="top-angle">
							</div>{/*/.top-angle */}

							<div className="container">
							<ImageSection data={sectiuni.edges[4].node.data}></ImageSection>
							</div>

						</div>
					</div>{/*/.volunteer-section */}
				</section>{/*/#volunteer */}
				{/*Volunteer Section End */}
            </React.Fragment>
        )
    }
}

VolunteerSection.propTypes = {
    data: PropTypes.any.isRequired
}

