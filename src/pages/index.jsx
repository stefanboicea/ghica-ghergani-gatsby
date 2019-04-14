import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {SimpleSection,CarouselSection,ImageSection,IframeSection, Gallery,GalleryItem,} from '../components/Section';

class Index extends Component {
  render() {
    const {
      data: { homepage,  posts, projects,sectiuni,elementegalerie },
    } = this.props
    return (
			<React.Fragment>
				<div className="main-menu-container navbar-fixed-top">
					<div id="main-menu" className="navbar navbar-default" role="navigation">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span className="sr-only">Toggle navigation</span>
									<i className="fa fa-bars"></i>
								</button>
								<h1>
									<a className="navbar-brand" href="index.html">
										<img className="logo" src="assets/images/logo.png" alt="Logo" rel="hoome" />
									</a>
								</h1>
							</div>

							<nav className="collapse navbar-collapse">
								<a href="#donate" className="donate pull-right">Donează <i className="fa fa-heart"></i></a>
								<ul id="headernavigation" className="nav navbar-nav pull-right">
									<li><a className="page-scroll active" href="#top-section">Acasa</a></li>
									<li><a className="page-scroll" href="#about">Despre</a></li>
									<li><a className="page-scroll" href="#team">Echipa</a></li>
									<li><a className="page-scroll" href="#service">Servicii</a></li>
									{/* <Link hash={`gallery`} activeClassName="page-scroll">Galerie</Link> */}
									<li><a className="page-scroll" href="#news">Blog</a></li>
									<li><a className="page-scroll" href="#upcoming-events">Evenimente</a></li>
									<li><a className="page-scroll" href="#contact">Contact</a></li>

								</ul>
							</nav>
						</div>
					</div>
				</div>
				<section id="top-section">
					<div className="top-section parallax-style">
						<div className="parallax-overlay">
							<div className="slider-txt-container">
								<div id="top-carousel" className="carousel slide" data-ride="carousel">

									<ol className="carousel-indicators">
										<li data-target="#top-carousel" data-slide-to="0" className="active"></li>
										<li data-target="#top-carousel" data-slide-to="1"></li>
										<li data-target="#top-carousel" data-slide-to="2"></li>
									</ol>
									<div className="carousel-inner">

										<div className="item active">
											<h2 className="thin-txt">
												Suntem la Florești
									</h2>
											<p className="bold-txt">
												ARTĂ /  CULTURĂ / MEȘTEȘUG
									</p>
											<p className="thin-txt">
												Domeniul Cantacuzino
									</p>
											<p className="link">
												<a href="#" className="btn custom-btn angle-effect">Află mai multe</a>
											</p>
										</div>

										<div className="item">
											<h2 className="thin-txt">
												O organizatie nonprofit
									</h2>
											<p className="bold-txt">
												Pentru protejarea patrimoniului
									</p>
											<p className="thin-txt">
												Hai să înaintăm
									</p>

											<p className="link">
												<a href="#" className="btn custom-btn angle-effect">afla mai multe</a>
											</p>
										</div>

										<div className="item">
											<h2 className="thin-txt">
												Copii sunt viitorul
									</h2>
											<p className="bold-txt">
												Noi încurajăm învățământul
									</p>
											<p className="thin-txt">
												Alătură-te cauzei noastre
									</p>

											<p className="link">
												<a href="#" className="btn custom-btn angle-effect">află mai multe</a>
											</p>
										</div>
									</div>
									<a className="slide-nav left" href="#top-carousel" data-slide="prev"><span></span></a>
									<a className="slide-nav right" href="#top-carousel" data-slide="next"><span></span></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="about">
					<div className="about-section">
						<div className="white-bg angular section-padding">
							<div className="top-angle">
							</div>
							<div className="container">
								<SimpleSection data={sectiuni.edges[0].node.data}></SimpleSection>
								<CarouselSection data={sectiuni.edges[1].node.data}></CarouselSection>
			
                        </div>
						</div>

						<IframeSection data={sectiuni.edges[2].node.data}></IframeSection>
					</div>
				</section>
				<section id="about-parallax">
					<div className="about-parallax parallax-style">
						<div className="parallax-overlay section-padding">
							<div className="container">
								<h3 className="parallax-title">
									suNTEM RECUNOSCĂTORI
						</h3>
								<p className="parallax-description">
									nE-AȚI AJUTAT SĂ STRÂNGEM <br />
									<span className="amount">$12,370,743</span> până acum!
						</p>
								<div className="progress-bar-container">
									<div className="progress">
										<div id="about-progress-1" className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
											<span className="sr-only">60% Complete (warning)</span>
										</div>
									</div>
								</div>{/*/.progress-bar-container */}
								<p>
									<a href="#donate" className="btn donate-btn">Donează și tu <i className="fa fa-heart"></i></a>
								</p>
							</div>
						</div>{/*/.parallax-overlay */}
					</div>{/*/.about-parallax */}
				</section>{/*/#about-parallax */}
				{/*About Parallax Section End */}




				{/*Team Section */}
				<section id="team">
					<div className="team-section">
						<div className="white-bg angular section-padding">
							<div className="top-angle">
							</div>{/*/.top-angle */}
							<div className="container"> 
							<SimpleSection data={sectiuni.edges[3].node.data}></SimpleSection>

								<div id="team-slider" className="owl-carousel owl-theme">
									<div className="item">
										<div className="team-member-box from-bottom delay-200">
											<figure>
												<img src="images/team-member/02.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Jens Parker</h3>
											<h4 className="member-designation">Founder</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>

									<div className="item">
										<div className="team-member-box from-bottom delay-600">
											<figure>
												<img src="images/team-member/01.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Anja Umland</h3>
											<h4 className="member-designation">Designer</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>

									<div className="item">
										<div className="team-member-box from-bottom delay-1000">
											<figure>
												<img src="images/team-member/03.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Jens Max</h3>
											<h4 className="member-designation">Developer</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>

									<div className="item">
										<div className="team-member-box from-bottom delay-1400">
											<figure>
												<img src="images/team-member/04.jpg" alt="tema-member" />
											</figure>
											<h3 className="member-name">Jens Kahaly</h3>
											<h4 className="member-designation">Programmer</h4>
											<p className="member-description">
												Lorem ipsum dolor sit amet, consectetur adipisicing repudiandae illo natus
									</p>{/*/.member-description */}
											<div className="social-buttons">
												<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
												<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
												<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
												<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
												<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
											</div>{/*/.social-buttons */}
										</div>{/*/.team-member-box */}
									</div>
								</div>{/*/#team-slider */}

							</div>
						</div>{/*./white-bg */}
					</div>{/*/.team-section */}
				</section>{/*/#team*/}
				{/*Team Section End */}




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

				{/*Services Section */}
				<section id="service">
					<div className="services-section white-bg angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="section-head">
								<h2 className="section-title">
									Services
						</h2>
								<p className="section-description">
									ALL OF OUR SERVICES IS CENTRALIZED TO THE WELFARE OF THE CHILDREN. WE SERVE THE CHILD WITH FOOD, EDUCATION, HABITATION, SAFETY AND EVERYTHING THE NEED.
						</p>
							</div>{/*/.section-head */}

							<div className="section-content">
								<div className="row">
									<div className="col-md-4 from-bottom delay-200">
										<div className="service-box">
											<div className="hex service-icon-hex">
												<div className="service-icon">
													<span aria-hidden="true" className="li_star"></span>
												</div>{/*/.service-icon */}
											</div>{/*/.hex */}
											<h3 className="service-title content-title">
												Fund Raising
									</h3>{/*/.service-title content-title */}
											<p className="service-description">
												We raise funds for the oppressed and affected child all over the world. We collect donation aiming to help the children and keep them safe.
									</p>{/*/.service-description */}

											<div className="services-button">
												<a href="#" className="btn custom-btn angle-effect">
													Learn More
										</a>
											</div>{/*/.services-button */}
										</div>{/*/.service-box */}
									</div>{/*/.col-md-4 */}

									<div className="col-md-4 from-bottom delay-600">
										<div className="service-box">
											<div className="hex service-icon-hex">
												<div className="service-icon">
													<span aria-hidden="true" className="li_lab"></span>
												</div>{/*/.service-icon */}
											</div>{/*/.hex */}
											<h3 className="service-title content-title">
												Tree Planting
									</h3>{/*/.service-title content-title */}
											<p className="service-description">
												We arrange event to make the world green and keep the environment favorable to us. Worldwide Tree is notable one of them.
									</p>{/*/.service-description */}

											<div className="services-button">
												<a href="#" className="btn custom-btn angle-effect">
													Learn More
										</a>
											</div>{/*/.services-button */}
										</div>{/*/.service-box */}
									</div>{/*/.col-md-4 */}

									<div className="col-md-4 from-bottom delay-1000">
										<div className="service-box">
											<div className="hex service-icon-hex">
												<div className="service-icon">
													<span aria-hidden="true" className="li_world"></span>
												</div>{/*/.service-icon */}
											</div>{/*/.hex */}
											<h3 className="service-title content-title">
												Child Care
									</h3>{/*/.service-title content-title */}
											<p className="service-description">
												In the present world, Childs' are living in danger, especially street Childs. We have many child care centers to care them.
									</p>{/*/.service-description */}

											<div className="services-button">
												<a href="#" className="btn custom-btn angle-effect">
													Learn More
										</a>
											</div>{/*/.services-button */}
										</div>{/*/.service-box */}
									</div>{/*/.col-md-4 */}
								</div>
							</div>
						</div>{/*/.container*/}
					</div>{/*/.services-section */}
				</section>



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


				{/*Testimonial Section*/}
				<section id="testimonial">
					<div className="testimonial-section parallax-style">
						<div className="parallax-overlay section-padding">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
											<ol className="carousel-indicators">
												<li data-target="#testimonial-carousel" data-slide-to="0" className="active"></li>
												<li data-target="#testimonial-carousel" data-slide-to="1"></li>
												<li data-target="#testimonial-carousel" data-slide-to="2"></li>
											</ol>{/*/.carousel-indicators */}
											<div className="carousel-inner">
												<div className="item active">
													<div className="testimonial-figure">

														<h3 className="parallax-title author-name">
															Max Sherman
												</h3>
														<p className="authors-review">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quam consectetur deserunt delectus, maxime natus aperiam libero molestiae beatae
												</p>{/*/.authors-review */}
														<div className="author-avatar">
															<img className="img-circle" src="images/testimonial-carousel/01.png" alt="carousel image" />
														</div>{/*/.author-avatar */}
													</div>{/*/.testimonial-figure */}
												</div>
												<div className="item">
													<div className="testimonial-figure">
														<h3 className="parallax-title author-name">
															Maria Johns
												</h3>
														<p className="authors-review">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quam consectetur deserunt delectus, maxime natus aperiam libero molestiae beatae
												</p>{/*/.authors-review */}
														<div className="author-avatar">
															<img className="img-circle" src="images/testimonial-carousel/02.png" alt="carousel image" />
														</div>{/*/.author-avatar */}
													</div>{/*/.testimonial-figure */}
												</div>
												<div className="item">
													<div className="testimonial-figure">
														<h3 className="parallax-title author-name">
															Lady Claudia
												</h3>
														<p className="authors-review">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quam consectetur deserunt delectus, maxime natus aperiam libero molestiae beatae
												</p>{/*/.authors-review */}
														<div className="author-avatar">
															<img className="img-circle" src="images/testimonial-carousel/03.png" alt="carousel image" />
														</div>{/*/.author-avatar */}
													</div>{/*/.testimonial-figure */}
												</div>
											</div>{/*/.carousel-inner */}
										</div>{/*/#testimonial-carousel */}
									</div>{/*/.col-md-12 */}
								</div>
							</div>
						</div>{/*/.parallax-overlay */}
					</div>{/*/.testimonial-section */}
				</section>{/*/#testimonial */}
				{/*Testimonial Section End*/}




				<Gallery items={elementegalerie.edges}></Gallery>


				{/*Causes Section*/}
				<section id="causes">
					<div className="causes-section gray-bg  angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="content-box">
										<div className="hex content-icon-hex hex-margin">
											<div className="content-icon">
												<span aria-hidden="true" className="li_megaphone"></span>
											</div>
										</div>
										<h3 className="content-title">
											Our Causes
								</h3>
										<p className="content-description">
											We have a fixed plan to improve the child world. Moreover, we are careful about the sudden disaster and harmful environment.
								</p>
										<div className="slide-nav-container">
											<a className="slide-nav left slide-left" href="#causes-post-slider" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
											<a className="slide-nav right slide-right" href="#causes-post-slider" data-slide="next"><i className="fa fa-chevron-right"></i></a>
										</div>{/*/.slide-nav-container */}
									</div>
								</div>{/*/.col-md-4 */}

								<div className="col-md-8">
									<div className="row">
										<div id="causes-post-slider" className="owl-carousel owl-theme">
											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-1.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">66% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-1" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}

											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-2.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">66% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-2" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}
											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-3.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">66% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-3" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}

											<div className="item col-md-12">
												<div className="causes-post">
													<figure>
														<img src="images/causes-post-image/post-4.jpg" alt="Post Image" />
														<figcaption>
															<div className="caption-txt">
																<span className="donated">66% Donated</span>
																<span className="to-go">/ $10,014 To Go</span>
															</div>

															<div className="progress">
																<div id="causes-progress-4" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
																	<span className="sr-only">60% Complete (warning)</span>
																</div>
															</div>{/*/.progress */}
														</figcaption>
													</figure>
													<h3 className="causes-post-title">
														the causes title goes here
											</h3>{/*/.causes-post-title */}
													<p className="post-text">
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class
											</p>{/*/.post-text */}
													<a className="btn donate-btn" href="#">
														Donate Now
											</a>
												</div>{/*/.causes-post */}
											</div>{/*/.item col-md-12 */}

										</div>{/*/.causes-post-slider */}
									</div>{/*/row */}
								</div>{/*/.col-md-8 */}
							</div>
						</div>

					</div>{/*/.causes-section */}
				</section>{/*/#causes */}
				{/*Causes Section End*/}








				{/*News Section*/}
				<section id="news">
					<div className="news-section white-bg angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="section-head">
								<h2 className="section-title">
									News
						</h2>{/*/.section-title */}
								<p className="section-description">
									CHECK THE NEWS OF CHILDREN WHAT GOING ON THE WORLD WITH THEM. COLLECT CHARITY WEBSITE TEMPLATES TO BUILD YOUR OWN CHARITY ORGANIZATION.
						</p>
							</div>{/*/.section-head */}

							<div className="row">
								<div className="news-container">
									<div className="news-item col-md-6 from-bottom delay-200">
										<img className="news-item-image" src="images/news/news-post-1.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-film"></i>
														</span>
													</div>

													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>
												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}

									<div className="news-item col-md-6 from-bottom delay-600">
										<img className="news-item-image" src="images/news/news-post-2.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-picture-o"></i>
														</span>
													</div>
													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>
												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}

									<div className="news-item col-md-6 from-bottom delay-200">
										<img className="news-item-image" src="images/news/news-post-3.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-film"></i>
														</span>
													</div>
													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>

												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}

									<div className="news-item col-md-6 from-bottom delay-600">
										<img className="news-item-image" src="images/news/news-post-4.jpg" alt="News Post Image" />
										<article className="news-article">
											<div className="article-container">
												<div className="post-meta">
													<div className="meta-icon">
														<span>
															<i className="fa fa-headphones"></i>
														</span>
													</div>
													<time dateTime="2014-02-21">21 Feb'14</time>
													<span className="name">
														<a href="#">John Doe</a>
													</span>
													<span>
														<a href="#">24 Comments</a>
													</span>
												</div>{/*/.post-meta */}
												<div className="post-details">
													<h3 className="content-title">Blog Post Title Goes Here</h3>
													<p>
														Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
											</p>
													<div>
														<a href="blog-single.html" className="btn custom-btn angle-effect">Read More</a>
													</div>
												</div>{/*/.post-details */}
											</div>{/*/.article-container */}
										</article>{/*/.news-article */}
									</div>{/*/.news-item */}
									<div className="view-all">
										<a href="blog-page.html" className="btn custom-btn angle-effect">View All News</a>
									</div>
								</div>{/*/.news-container */}
							</div>
						</div>
					</div>{/*/.news-section */}
				</section>{/*/#news */}
				{/*News Section End*/}





				{/*Upcoming Events Section */}
				<section id="upcoming-events">
					<div className="upcoming-events-section gray-bg angular section-padding">

						<div className="top-angle"></div>

						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="content-box">
										<div className="hex content-icon-hex hex-margin">
											<div className="content-icon">
												<span aria-hidden="true" className="li_calendar"></span>
											</div>{/*/.content-icon */}
										</div>{/*/.content-icon-hex */}
										<h3 className="content-title">
											Upcoming Event
								</h3>
										<p className="content-description">
											We create events aiming to spear the voice for children and gather for support. Please update with our events and confirm your presence.
								</p>
									</div>

									<div className="slide-nav-container customNavigation">
										<a className="slide-nav left slide-left" href="#event-post-slider" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
										<a className="slide-nav right slide-right" href="#event-post-slider" data-slide="next"><i className="fa fa-chevron-right"></i></a>
									</div>{/*/.slide-nav-container */}
								</div>{/*/.col-md-4 */}

								<div className="col-md-8">
									<div className="row">
										<div className="event-container">
											<div id="event-post-slider" className="owl-carousel owl-theme">

												<div className="item col-md-12">
													<div className="event-content">
														<h4 className="content-title">
															<a href="#">Event Title Goes Here</a>
														</h4>{/*/.event-title */}
														<div className="event-date-time-place">
															<time dateTime="2014-06-30">
																<span><i className="fa fa-clock-o"></i></span> Aguste 29, 2014 at 3pm to 6pm
													</time>

															<span><i className="fa fa-map-marker"></i></span> Place: Bronx NY, Unites States
												</div>
														<div className="event-img">
															<img src="images/event-post-image/post-1.jpg" alt="Event Post" />
														</div>{/*/.event-img */}
													</div>{/*/.event-content  */}
												</div>{/*/.item col-md-12 */}

												<div className="item col-md-12">
													<div className="event-content">
														<h4 className="content-title">
															<a href="#">Event Title Goes Here</a>
														</h4>{/*/.event-title */}
														<div className="event-date-time-place">
															<time dateTime="2014-06-30">
																<span><i className="fa fa-clock-o"></i></span> Aguste 29, 2014 at 3pm to 6pm
													</time>

															<span><i className="fa fa-map-marker"></i></span> Place: Bronx NY, Unites States
												</div>
														<div className="event-img">
															<img src="images/event-post-image/post-2.jpg" alt="Event Post" />
														</div>{/*/.event-img */}
													</div>{/*/.event-content  */}
												</div>{/*/.item col-md-12 */}

												<div className="item col-md-12">
													<div className="event-content">
														<h4 className="content-title">
															<a href="#">Event Title Goes Here</a>
														</h4>{/*/.event-title */}
														<div className="event-date-time-place">
															<time dateTime="2014-06-30">
																<span><i className="fa fa-clock-o"></i></span> Aguste 29, 2014 at 3pm to 6pm
													</time>

															<span><i className="fa fa-map-marker"></i></span> Place: Bronx NY, Unites States
												</div>
														<div className="event-img">
															<img src="images/event-post-image/post-3.jpg" alt="Event Post" />
														</div>{/*/.event-img */}
													</div>{/*/.event-content  */}
												</div>{/*/.item col-md-12 */}

												<div className="item col-md-12">
													<div className="event-content">
														<h4 className="content-title">
															<a href="#">Event Title Goes Here</a>
														</h4>{/*/.event-title */}
														<div className="event-date-time-place">
															<time dateTime="2014-06-30">
																<span><i className="fa fa-clock-o"></i></span> Aguste 29, 2014 at 3pm to 6pm
													</time>

															<span><i className="fa fa-map-marker"></i></span> Place: Bronx NY, Unites States
												</div>
														<div className="event-img">
															<img src="images/event-post-image/post-4.jpg" alt="Event Post" />
														</div>{/*/.event-img */}
													</div>{/*/.event-content  */}
												</div>{/*/.item col-md-12 */}


											</div>{/*/#event-post-slider */}

										</div>{/*/.event-container*/}
									</div>
								</div>{/*/.com-md-8 */}
							</div>
						</div>
						<div className="bottom-angle"></div>
					</div>{/*/.upcoming-events-section */}
				</section>{/*/.upcoming-events */}
				{/*Upcoming Events Section End*/}





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




				{/*Contact Section */}
				<section id="contact">
					<div className="contact-section angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="section-head">
								<h2 className="section-title">
									Contact
						</h2>
								<p className="section-description">
									IF YOU FEEL, NEED WORKING FOR CHILD PLEASE CONTACT WITH US AND LET US KNOW HOW YOU LIKE TO WORK FOR THEM. CONTENT WITH US IF ANY MORE INFORMATION NEEDED.
						</p>
							</div>{/*/.section-head */}
						</div>

						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div className="contact-form-container">
										<h3 className="content-title">
											Drop us a message
								</h3>

										<form className="contact-form" id="contact-form" action="email.php" method="post">
											<div id="name_error" className="error">
												<img src="assets/images/email/error.png" alt="Error!" />
												Please enter your name.
									</div>{/*/#name_error */}
											<div className="input-container li_user">
												<input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
											</div>{/*/.input-container*/}

											<div id="email_error" className="error">
												<img src="assets/images/email/error.png" alt="Error!" />
												Please enter your valid E-mail ID.
									</div>{/*/#email_error */}
											<div className="input-container li_mail">
												<input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
											</div>{/*/.input-container */}

											<div id="message_error" className="error">
												<img src="assets/images/email/error.png" alt="Error!" />
												Please enter your message.
									</div>{/*/#message_error */}
											<div className="input-container li_pen">
												<textarea className="form-control" id="message" name="message" cols="45" placeholder="Message" rows="6"></textarea>
											</div>{/*/.input-container */}

											<div id="mail_success" className="success">
												<img src="assets/images/email/success.png" alt="Success!" />
												Your message has been sent successfully.
									</div>{/*/#mail_success */}

											<div id='mail_fail' className='error'>
												<img src="assets/images/email/error.png" alt="Error!" /> Sorry, error occured this time sending your message.
									</div>{/*/#mail_fail */}

											<button type="submit" className="btn custom-btn angle-effect" id="send_message">Submit</button>
										</form>{/*/.contact-form */}

									</div>{/*/.contact-form-container */}
								</div>{/*/.col-md-6 */}

								<div className="col-md-6">
									<div className="contact-info">
										<h3 className="content-title">
											Contact Info
								</h3>
										<p className="content-description">
											If you need more charity website templates or this charity website template contact with us. We will help you to make successful any of your charity works. Feel free to contact with us through mail address.
								</p>
										<address>
											<ul className="contact-address">
												<li className="fa-map-marker">
													13/2 Elizabeth St, Melbourne VIC 3000, Australia
										</li>
												<li className="fa-phone">
													+61 3146 8728, +61 0987 6543
										</li>
												<li className="fa-envelope">
													support@envato.net
										</li>
											</ul>{/*/.contact-address */}
										</address>
									</div>{/*/.contact-info */}
								</div>{/*/.col-md-6 */}
							</div>
						</div>
						<div className="bottom-angle">
						</div>
					</div>{/*/.contact-section */}
				</section>{/*/#contact */}
				{/*Contact Section End */}




				{/*Google Map Section */}
				<div id="google-map">
					<div className="map-container">
						<div id="googleMaps" className="google-map-container"></div>
					</div>
				</div>{/*/#google-map*/}
				{/*Google Map Section End */}




				{/*Scroll to Top */}
				<div id="scroll-to-top">
					<div className="hex scroll-top">
						<span><i className="fa fa-chevron-up"></i></span>
					</div>
				</div>{/*/#scroll-to-top */}
				{/*Scroll to Top End*/}




				{/*Footer Section */}
				<footer id="footer-section">
					<div className="footer-section">
						<div className="container">
							<div className="footer-social-btn pull-right">
								<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
								<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
								<a href="#" className="github-btn"><i className="fa fa-github-alt"></i></a>
								<a href="#" className="vimeo-btn"><i className="fa fa-vimeo-square"></i></a>
								<a href="#" className="pinterest-btn"><i className="fa fa-pinterest"></i></a>
								<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
								<a href="#" className="youtube-btn"><i className="fa fa-youtube"></i></a>
								<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
								<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
							</div>{/*/.footer-social-btn */}
							<div className="copyrights pull-left">
								&copy; <a href="#">Heal</a> 2014, All Rights Reserved, Developed by <a href="http://www.codexcoder.com">CodexCoder</a>
							</div>{/*/.copyrights */}


						</div>
					</div>{/*/.footer-section */}
				</footer>

			</React.Fragment>

		)
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
    sectiuni: PropTypes.object.isRequired,
		elementegalerie:PropTypes.object.isRequired
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProjectsBodyLinkItem {
      edges {
        node {
          primary {
            label {
              text
            }
            link {
              url
            }
          }
        }
      }
    }
    sectiuni: allPrismicSectiune (sort: { fields: [data___ordine], order: ASC }){
      edges {
      node {
        uid
        data {
        ordine 
        titlu {
          text
        }
        subtitlu {
          text
        }
        descriere {
          text
        }
        }
      }
      }
    }
    elementegalerie:allPrismicGalerieElement {
      edges {
      node {
        id
        data {
        titlu {
          text
        }
        descriere {
          text
        }
        imagine {
          url
        }
        }
        tags 
      }
      }
    }
  }
`
