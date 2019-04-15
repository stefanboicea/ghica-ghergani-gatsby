import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { SimpleSection, CarouselSection, ImageSection, IframeSection, Gallery, GalleryItem, } from '../components/Section';

class Index extends Component {
	render() {
		const {
			data: { homepage, posts, projects, sectiuni, elementegalerie },
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

				{/* top section */}

				{/* about section */}

				{/* about paralax */}


				{/* team section */}

				{/* volunteer */}

				{/* services */}

				{/* pricing */}

				{/* testimonial */}


				<Gallery items={elementegalerie.edges}></Gallery>

				{/* causes */}


				{/* news */}


				{/* events */}


				{/* clients */}
		
				{/* contact */}



		




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
		elementegalerie: PropTypes.object.isRequired
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
    posts: allPrismicPost(limit: 4, sort: { fields: [data___date], order: DESC }) {
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
				tip
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
