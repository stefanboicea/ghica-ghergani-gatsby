import React from 'react'
import PropTypes from 'prop-types'



const Clients = ({ input }) => (
	<div className="section mb-5">
					<div className="container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
								<h1 className="text-center">OUR CLIENTS</h1>
								<p className="desc mb-7">Clients we have worked with</p>
							</div>
						</div>
						<div className="row">
							<div className="cms-grid-wraper cms-grid-client">
								<div className="cms-grid cms-grid">
									<div className="cms-grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center">
										<div className="cms-client-logo has-thumbnail">
											<img width="170" height="93" src="../images/client/client_170x93.jpg" alt="client1" />
										</div>
									</div>
									<div className="cms-grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center">
										<div className="cms-client-logo has-thumbnail">
											<img width="170" height="93" src="../images/client/client_170x93.jpg" alt="client1" />
										</div>
									</div>
									<div className="cms-grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center">
										<div className="cms-client-logo has-thumbnail">
											<img width="170" height="93" src="../images/client/client_170x93.jpg" alt="client1" />
										</div>
									</div>
									<div className="cms-grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center">
										<div className="cms-client-logo has-thumbnail">
											<img width="170" height="93" src="../images/client/client_170x93.jpg" alt="client1" />
										</div>
									</div>
									<div className="cms-grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center">
										<div className="cms-client-logo has-thumbnail">
											<img width="170" height="93" src="../images/client/client_170x93.jpg" alt="client1" />
										</div>
									</div>
									<div className="cms-grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center">
										<div className="cms-client-logo has-thumbnail">
											<img width="170" height="93" src="../images/client/client_170x93.jpg" alt="client1" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
)

export default Clients

Clients.propTypes = {
  input: PropTypes.object
}
