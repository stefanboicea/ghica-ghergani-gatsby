import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class ClientsSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
               		{/*Clients Section */}
				<section id="clients">
					<div className="clients-section parallax-style">
						<div className="parallax-overlay dark-overlay section-padding">
							<div className="container">
								<div className="section-head">
									<h3 className="parallax-title">
										Our Partners
							</h3>
								</div>{/*/.section-head */}

								<div className="row">
									<div className="clients-logo">
										<div className="col-sm-3">
											<div className="client-logo">
												<a href="#">
													<img src="images/clients-logo/client-1.png" alt="Clients Logo" />
												</a>
											</div>{/*/.client-logo */}
										</div>{/*/.col-sm-3 */}

										<div className="col-sm-3">
											<div className="client-logo">
												<a href="#">
													<img src="images/clients-logo/client-2.png" alt="Clients Logo" />
												</a>
											</div>{/*/.client-logo */}
										</div>{/*/.col-sm-3 */}

										<div className="col-sm-3">
											<div className="client-logo">
												<a href="#">
													<img src="images/clients-logo/client-3.png" alt="Clients Logo" />
												</a>
											</div>{/*/.client-logo */}
										</div>{/*/.col-sm-3 */}

										<div className="col-sm-3">
											<div className="client-logo">
												<a href="#">
													<img src="images/clients-logo/client-4.png" alt="Clients Logo" />
												</a>
											</div>{/*/.client-logo */}
										</div>{/*/.col-sm-3 */}
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

