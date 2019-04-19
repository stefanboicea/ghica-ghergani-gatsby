import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'
import Img from 'gatsby-image'


const PageWrapper = Wrapper.withComponent('main')

const Page = ({ data: { prismicPage, posts }, location }) => {
  const { data } = prismicPage

  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPage}
        article
      />
      <React.Fragment>
      <div id="main" className="main clearfix">
				<div id="page-title" className="page-title">
					<div className="container">
						<div className="row">
							<div id="page-title-text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
								<h1>Our Portfolio</h1>
								<div className="page-sub-title">Full width 3 columns (No spaces)</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container-fluid">
						<div className="row">
							<div className="cms-blog-portfolio-nospace no-container">
								<div className="cms-portfolio cms-portfolio-grid grid-3">
									<div className="cms-grid-filter playfairdisplay clearfix">
										<ul className="list-unstyled list-inline cms-filter-category">
											<li><a className="active" href="#" data-filter="">All</a></li>
											<li><a href="#" data-filter=".portfolio-animation">Animation</a></li>
											<li><a href="#" data-filter=".portfolio-branding">Branding</a></li>
											<li><a href="#" data-filter=".portfolio-graphic-design">Graphic Design</a></li>
											<li><a href="#" data-filter=".portfolio-illustration">Illustration</a></li>
										</ul>
									</div>
									<div className="cms-loadmore-post cms-isotope-grid-post portfolio-grid2 clearfix text-center">
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-branding portfolio-illustration nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">BY THE SEA</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Branding</a>, <a href="#">Illustration</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-branding nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio #5</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Branding</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-animation nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio #4</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Animation</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-graphic-design nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio #3</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Graphic Design</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-branding nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio #2</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Branding</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-animation nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio #1</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Animation</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-graphic-design portfolio-illustration nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio standard #10</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Graphic Design</a>, <a href="#">Illustration</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-graphic-design nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio standard #9</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Graphic Design</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="cms-grid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-graphic-design nopaddingall">
											<div className="portfolio-wrapper nospace">
												<div className="entry-content">
													<div className="entry-media cms-blog-media cms-media overlay-wrap">
														<img width="770" height="520" src="../images/portfolio/portfolio_770x520.jpg" alt="" />
														<div className="overlay">
															<div className="overlay-content">
																<div className="entry-header">
																	<h4 className="entry-title"><a href="portfolio-detail.html">Portfolio standard #8</a></h4>
																	<div className="entry-meta cms-meta">
																		<ul className="list-unstyled list-inline">
																			<li className="detail-terms">
																				<a href="#">Graphic Design</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="cs_pagination">
										<div id="cshero-load-posts"><a href="javascript:void(0)" className="btn btn-default">Load More</a></div>
									</div>
								</div>
						    </div>
					    </div>
					</div>
				</div>
    		</div>
      </React.Fragment>
    </Layout>
  )
}

export default Page

Page.propTypes = {
  data: PropTypes.shape({
    prismicPage: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        coverimage {
          url
        }
        title {
          text
        }
        description
      }
    }
  }
`

