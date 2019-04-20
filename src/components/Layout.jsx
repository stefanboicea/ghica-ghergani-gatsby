/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '@reach/skip-nav/styles.css'

import Footer from './Footer'
import SEO from './SEO'


const PureLayout = ({ children, data, customSEO }) => (
  <>
    {!customSEO && <SEO />}
    <React.Fragment>
      {/* <div className="noo-spinner">
        <div className="spinner">
          <div className="child double-bounce1"></div>
          <div className="child double-bounce2"></div>
        </div>
      </div> */}
      <div id="cms-page" className="cs-wide header-default header-ontop clearfix">
        <div id="cms-header-wrapper" className="clearfix">
          <header id="masthead" className="site-header header-default header-ontop clearfix">
            <div id="cms-header" className="cms-header header-default header-ontop no-sticky clearfix">
              <div className="container">
                <div id="cms-header-logo" className="main-navigation pull-left">
                  <a href="./">
                    <img alt="" src="../images/logo.png" />
                  </a>
                </div>
                <div id="cms-nav-extra" className="cms-nav-extra main-navigation pull-right">
                  <div className="pull-left"></div>
                  <div className="pull-left">
                    <ul>
                      <li>
                        <a id="header-widget-search"><i className="fa fa-search"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div id="cms-menu-mobile" className="pull-left">
                    <ul>
                      <li>
                        <a><i className="fa fa-bars"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="cms-header-navigation" className="cms-header-navigation">
                  <nav id="site-navigation" className="main-navigation clearfix">
                    <div className="cms-menu pull-right">
                      <div className="menu-main-menu-container">
                        <ul className="nav-menu">
                          <li><a href="./">Home</a></li>
                          <li className="menu-item-has-children">
                            <a href="#">About us</a>
                            <ul className="sub-menu">
                              <li><a href="about-us.html">About us 1</a></li>
                              <li><a href="about-us-2.html">About us 2</a></li>
                              <li><a href="about-me.html">About Me</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Services</a>
                            <ul className="sub-menu">
                              <li><a href="our-service.html">Our service 1</a></li>
                              <li><a href="our-service-2.html">Our Service 2</a></li>
                            </ul>
                          </li>
                          <li className="current_page_item menu-item-has-children">
                            <a href="our-portfolio.html">Portfolio</a>
                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <a href="#" className="">Grid Layout</a>
                                <ul className="sub-menu">
                                  <li><a href="portfolio-2-columns.html">Standard 2 columns</a></li>
                                  <li><a href="portfolio-3-columns.html">Standard 3 columns</a></li>
                                  <li><a href="portfolio-3-columns-no-space.html">Full-width 3 columns</a></li>
                                  <li><a href="4-columns-full-width.html">Full-width 4 columns</a></li>
                                </ul>
                              </li>
                              <li className="current_page_item menu-item-has-children">
                                <a href="#">Grid Without Space</a>
                                <ul className="sub-menu">
                                  <li><a href="3-columns-no-space-full-width.html">Full-width 3 columns (No spaces)</a></li>
                                  <li><a href="4-columns-no-space-full-width.html">Full-width 4 columns (No spaces)</a></li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <a href="#">Single Layout</a>
                                <ul className="sub-menu">
                                  <li><a href="portfolio-standard.html">Standard</a></li>
                                  <li><a href="portfolio-full-width.html">Full-width</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/blog">Blog</a>
                            {/* <ul className="sub-menu">
                              <li><a href="blog-standard.html">Blog Standard</a></li>
                              <li><a href="blog-grid.html">Blog Grid</a></li>
                              <li><a href="blog-masonry.html">Blog Masonry</a></li>
                              <li className="menu-item-has-children">
                                <a href="#">Single post format</a>
                                <ul className="sub-menu">
                                  <li><a href="standard-post.html">Standard Post</a></li>
                                  <li><a href="no-image-post.html">No Image Post</a></li>
                                  <li><a href="gallery-post.html">Gallery Post</a></li>
                                  <li><a href="audio-post.html">Audio Post</a></li>
                                  <li><a href="video-post.html">Video post</a></li>
                                  <li><a href="quote-post.html">Quote post</a></li>
                                </ul>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Contact</a>
                            <ul className="sub-menu">
                              <li><a href="contact-us.html">Contact Us 1</a></li>
                              <li><a href="contact-us-2.html">Contact Us 2</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        </div>
        {children}
        <footer id="footer-wrapper" className="footer-bottom-layout-1">
          <div id="cms-footer-bottom" className="layout-1">
            <div className="footer-social footer-bottom-3">
              <div className="container">
                <div className="cms-social-sc">
                  <a href="#" className="fa fa-facebook" title="Facebook"></a>
                  <a href="#" className="fa fa-twitter" title="Twitter"></a>
                  <a href="#" className="fa fa-instagram" title="Instagram"></a>
                  <a href="#" className="fa fa-behance" title="Behance"></a>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="footer-address footer-bottom-1 pt-7 pb-4 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="cms-address">
                      <p>14 Tottenham Court Road, London, England / (102) 3456 789 / info@domain.com</p>
                    </div>
                  </div>
                  <div className="footer-copyright footer-bottom-2 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="cms-copyright">
                      <p>Copyright © 2016 TK-Themes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
    {/* <Footer>
        <div dangerouslySetInnerHTML={{ __html: data.prismicHomepage.data.footer.html }} />
      </Footer> */}
  </>
)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicLayout {
              data {
                footer {
                  html
                }
              }
            }
          }
        `}
        render={data => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
  customSEO: PropTypes.bool,
}

PureLayout.defaultProps = {
  customSEO: false,
}
