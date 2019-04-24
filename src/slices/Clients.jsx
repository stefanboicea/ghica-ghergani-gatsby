import React from 'react'
import PropTypes from 'prop-types'



const Clients = ({ input }) => {
	let items = []
	for (const [index, item] of input.items.entries()) {

		items.push(
			<div className="cms-grid-item col-lg-2 col-md-3 col-sm-6 col-xs-12 text-center" key={index}>
				<div className="cms-client-logo has-thumbnail">
					<img width="170" height="93" src={item.portrait.url} />
				</div>
			</div>
		)
	}

	return (
		<div className="section mb-5">
			<div className="container">
				<div className="row">
					<div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
						<h1 className="text-center">Clienti</h1>
						<br></br>
						{/* <p className="desc mb-7">Clients we have worked with</p> */}
					</div>
				</div>
				<div className="row">
					<div className="cms-grid-wraper cms-grid-client">
						<div className="cms-grid cms-grid">
							{items}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Clients

Clients.propTypes = {
	input: PropTypes.object
}
