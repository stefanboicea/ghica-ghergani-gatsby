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
						<div id="page-title" className="page-title" style={{ backgroundImage: 'url(../images/background/background_1920x400.jpg)' }}>
							<div className="container">
								<div className="row">
									<div id="page-title-text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
										<h1>Contactati-ne</h1>
										{/* <div className="page-sub-title">Drop us a line</div> */}
									</div>
								</div>
							</div>
						</div>
						<div className="section mb-10">
							<div className="container">
								<div className="row">
									<div data-wow-delay="0.3s" className="col-sm-12 pull-left wow fadeInUp">
										<div className="cms-fancy-box-single">
											<div className="cms-fancyboxes-body">
												<div className="cms-fancybox-item">
													<div className="fancy-box-icon pull-left">
														<div className="fancy-box-icon-inner">
															<i className="pe-7s-map-marker"></i>
														</div>
													</div>
													<div className="fancy-box-content-wrap has-icon-image">
														<h4>Locatia</h4>
														<div className="fancy-box-content">
															<p>Domeniul de la Ghergani se află la o distanță de 40 de km de București, situându-se pe DN 71 (București – Târgoviște).
Accesul la Domeniul Ion Ghica se face din Strada Ion Ghica din cartierul Ghergani, orașul Răcari, județul Dâmbovița.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* <div data-wow-delay="0.3s" className="col-sm-4 pull-left wow fadeInUp">
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
					 */}
								</div>
								<div className="row">
									<div data-wow-delay="0.3s" className="col-sm-12 pull-left wow fadeInUp">
										<div className="cms-fancy-box-single">
											<div className="cms-fancyboxes-body">
												<div className="cms-fancybox-item">
													<div className="fancy-box-icon pull-left">
														<div className="fancy-box-icon-inner">
															<i className="pe-7s-map-marker"></i>
														</div>
													</div>
													<div className="fancy-box-content-wrap has-icon-image">
														<h4>Despre acces</h4>
														<div className="fancy-box-content">
															<p>

																Pentru a va veni in intampinare, va trimitem cateva detalii referitoare la cum se ajunge la Ghergani.
															 
																Domeniul Ghica se afla pe Strada Ion Ghica, in cartierul Ghergani din centrul orașului Răcari, judetul Dambovita, pe drumul care leaga Bucuresti de Targoviste.
																Drumul din Bucuresti la Ghergani dureaza aproximativ 30-40 de minute.
															 
																Din Bucuresti se poate iesi prin cartierul Chitila.
																Se trece pe sub Podul Constanta, dupa care, la stanga, sa mergeti pe Soseaua Chitila care va fi semnalizata printr-un indicator rutier.
																Se trece pe sub podul Soselei de Centura, unde se afla un sens giratoriu, din care va indreptati spre Chitila.
																Mentineti drumul spre Targoviste la bifurcatia care va aparea la iesirea din Baldana.
																Cand ajungeti in orasul Racari, mergeti inainte, spre centru. Ca puncte de reper sunt Primaria si farmacia care se afla pe dreapta.
																Dupa aproximativ 1,5 km veti trece peste un pod peste raul Ilfovăț.
																Din indepartare veti putea vedea parcul Domeniului cu arbori inalti.
 Pe dreapta veti vedea zidul care imprejmuiește Domeniul, de culoare portocalie. Pe zid veți vedea și un semnalizator care va indica intrarea.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>


								</div>
							</div>

						</div>
						{/* <div className="section mb-10">
					<div className="container">
						<div className="row">
							<div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
								<div id="map" data-marker-image="../images/assets/map-marker.png"></div>
							</div>
						</div>
					</div>
				</div> */}
						<div className="section mb-10">
							<div className="container">
								<div className="row">
									<div data-wow-delay="0.3s" className="col-sm-5 pt-10 wow fadeInLeft">
										<h1 className="text-center">Contact</h1>
										<p className="desc">Trimiteti un mesaj</p>
										<p className="text-center">
										<a href="mailto:contact@domeniul-ghica.ro">contact@domeniul-ghica.ro</a>  
											</p>
									</div>
									<div data-wow-delay="0.3s" className="col-sm-7 wow fadeInRight">
										<form className="contact-form" action="/" id="contact-form" data-netlify="true" method="post">
											<input type="hidden" name="form-name" value="contact-form" />
											<div className="row">
												<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
													<div className="your-name">
														<input type="text" name="your-name" id="name" placeholder="Nume" />
													</div>
												</div>
												<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
													<div className="your-email">
														<input type="email" name="your-email" id="email" placeholder="Email" />
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
													<div className="your-message">
														<textarea name="your-message" cols="40" id="message" rows="10" placeholder="Mesaj"></textarea>
													</div>
												</div>
											</div>
											<div id="mail_success" className="row" style={{ display: 'none' }}>
												Mesajul a fost trimis cu succes.
                        </div>

											<div className="row">
												<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
													<button type="submit" id="send_message" > Trimite</button>
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


