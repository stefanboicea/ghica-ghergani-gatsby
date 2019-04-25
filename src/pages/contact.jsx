import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import website from '../../config/website'

class Contact extends Component {
  render() {
    return (
      <Layout customSEO>
        <SEO
          title={`${website.titleAlt}`}
          // pathname={location.pathname}
          desc={website.description}
        />
        <React.Fragment>

        <div id="main" className="main clearfix">
				<div id="page-title" className="page-title" style={{backgroundImage: 'url(../images/background/background_1920x400.jpg)'}}>
					<div className="container">
						<div className="row">
							<div id="page-title-text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
								<h1>Contactati-ne</h1>
								<div className="page-sub-title">Drop us a line</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section mb-10">
					<div className="container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-4 pull-left wow fadeInUp">
								<div className="cms-fancy-box-single">
									<div className="cms-fancyboxes-body">
										<div className="cms-fancybox-item">
											<div className="fancy-box-icon pull-left">
												<div className="fancy-box-icon-inner">
													<i className="pe-7s-map-marker"></i>
								                </div>
								            </div>
                                    		<div className="fancy-box-content-wrap has-icon-image">
                                    			<h4>OUR LOCATION</h4>
                                    			<div className="fancy-box-content">
                                    				<p>14 Tottenham Court Road<br />London, England</p>
                                    			</div>
                                    		</div>
								        </div>
								    </div>
								</div>
							</div>
							<div data-wow-delay="0.3s" className="col-sm-4 pull-left wow fadeInUp">
								<div className="cms-fancy-box-single">
									<div className="cms-fancyboxes-body">
										<div className="cms-fancybox-item">
											<div className="fancy-box-icon pull-left">
												<div className="fancy-box-icon-inner">
													<i className="pe-7s-phone"></i>
								                </div>
								            </div>
                                    		<div className="fancy-box-content-wrap has-icon-image">
                                    			<h4>CALL US</h4>
                                    			<div className="fancy-box-content">
                                    				<p>(102) 3456 789<br />(987) 6543 210</p>
                                    			</div>
                                    		</div>
								        </div>
								    </div>
								</div>
							</div>
							<div data-wow-delay="0.3s" className="col-sm-4 pull-left wow fadeInUp">
								<div className="cms-fancy-box-single">
									<div className="cms-fancyboxes-body">
										<div className="cms-fancybox-item">
											<div className="fancy-box-icon pull-left">
												<div className="fancy-box-icon-inner">
													<i className="pe-7s-mail-open-file"></i>
								                </div>
								            </div>
                                    		<div className="fancy-box-content-wrap has-icon-image">
                                    			<h4>E-MAIL US</h4>
                                    			<div className="fancy-box-content">
                                    				<p>info@yourdomain.com</p>
                                    			</div>
                                    		</div>
								        </div>
								    </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section mb-10">
					<div className="container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
								<div id="map" data-marker-image="../images/assets/map-marker.png"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="section mb-10">
					<div className="container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-5 pt-10 wow fadeInLeft">
								<h1 className="text-center">Contact</h1>
								<p className="desc">Send a message</p>
							</div>
							<div data-wow-delay="0.3s" className="col-sm-7 wow fadeInRight">
								<form className="contact-form">
									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
											<div className="your-name">
												<input type="text" name="your-name" value="" placeholder="Name" />
											</div>
										</div>
										<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
											<div className="your-phone">
												<input type="text" name="your-phone" value="" placeholder="Phone" />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
											<div className="your-email">
												<input type="email" name="your-email" value="" placeholder="Email" />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
											<div className="your-message">
												<textarea name="your-message" cols="40" rows="10">Message</textarea>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
											<input type="submit" value="Send Message" />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
    		</div>
        </React.Fragment>
      </Layout>
    )
  }
}

export default Contact

Contact.propTypes = {
  data: PropTypes.object
}


