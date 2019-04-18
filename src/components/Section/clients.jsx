import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class ClientsSection extends Component {
    render() {
		const { data } = this.props
        let items = []
        let itemsli = []
        for (const [index, item] of data.partners.entries()) {
            items.push(
				<div className="col-sm-3">
				<div className="client-logo">
					<a href={item.link.url}>
						<img src={item.logo.url}  />
					</a>
				</div>{/*/.client-logo */}
			</div>
            )
        }
        return (
            <React.Fragment>
               		{/*Clients Section */}
				<section id="clients">
					<div className="clients-section parallax-style">
						<div className="parallax-overlay dark-overlay section-padding">
							<div className="container">
								<div className="section-head">
									<h3 className="parallax-title">
										Parteneri
							</h3>
								</div>{/*/.section-head */}

								<div className="row">
									<div className="clients-logo">
								
									{items}
									</div>{/*/.clients-logo */}
								</div>{/*/.low */}
							</div>
						</div>{/*/.parallax-overlay */}
					</div>{/*/.clients-section */}
				</section>{/*/#clients */}
				{/*Clients Section End */}
            </React.Fragment>
        )
    }
}

ClientsSection.propTypes = {
    data: PropTypes.any
}

