import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import website from '../../config/website'
import Categories from '../components/Listing/Categories'

class Blog extends Component {
  render() {
    const {
      data: { posts },
		} = this.props
		
		
		const categorySet = new Set()
		const postList = posts.edges
		postList.forEach(edge => {
			if (edge.node.data.categories[0].category) {
				edge.node.data.categories.forEach(cat => {
					categorySet.add(cat.category.document[0].data.name)
				})
			}
		})

		const categories = Array.from(categorySet)
		let items = []
		for (const [index, item] of postList.entries()) {
			const post = item.node
			const link = '/blog/' + post.uid
			items.push(
		 <div className="cms-grid-item col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
											<div className="blog-wrapper">
												<div className="entry-header">
													<h2 className="entry-title"><a href={link}>{post.data.title.text}</a></h2>
													<div className="entry-meta cms-meta">
														<ul className="list-unstyled list-inline">
															<li className="detail-date"><a href="#">{post.date}</a></li>
															{/* <li className="detail-author"><a href="#">admin</a></li>
															<li className="detail-terms"><a href="#">Featured</a></li>
															<li className="detail-comment"><a href="#">0 Comments</a></li> */}
														</ul>
													</div>
												</div>
												<div className="entry-content">
													<div className="entry-media">
														<img width="1000" height="676" src={post.data.coverimage.url} alt="" />
													</div>
												</div>
											</div>
										</div> 
			)
		}




    return (
      <Layout customSEO>
        <SEO
          title={`${website.titleAlt}`}
          pathname={location.pathname}
          desc={website.description}
        />
        <React.Fragment>

        <div id="main" className="main clearfix">
				<div id="page-title" className="page-title" style={{backgroundImage: 'url(../images/background/background_1920x400.jpg)'}}> 
					<div className="container">
						<div className="row">
							<div id="page-title-text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
								<h1>Blogul nostru</h1>
								<div className="page-sub-title">Ultimele stiri</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-8 col-lg-8 mb-5">
								<div className="cms-blog cms-blog-standard grid-1">
									<div className="cms-isotope-grid-post row clearfix">
								
								{items}
								
									</div>
									         
					            </div>
					        </div>
					        <div id="page-sidebar" className="col-sm-12 col-md-4 col-lg-4">
					        	<div id="secondary" className="widget-area">
					        		<div className="widget">
					        			<h3 className="wg-title">Inspiratiile noastre zilnice</h3>
					        			<p>
					        				Cherish your solitude. Take trains by yourself to places you have never been. Sleep out alone under the stars. Learn how to drive a stick shift. Go so far away that you stop being afraid of not coming back. Say no when you don’t want to do something. Say yes if your instincts are strong, even if everyone around you disagrees. Decide whether you want to be liked or admired. Decide if fitting in is more important than finding out what you’re doing here. Believe in kissing.
					        			</p>
					        		</div>
					        		{/* <div className="widget">
					        			<h3 className="wg-title">Recent Posts</h3>
					        			<ul>
					        				<li><a href="#">Enjoying the small things</a></li>
					        				<li><a href="#">Riding around on my bicycle</a></li>
					        				<li><a href="#">My summer trip recap</a></li>
					        				<li><a href="#">Lost in New Zealand</a></li>
					        				<li><a href="#">Are You With Me (Remix)</a></li>
					        			</ul>
					        		</div> */}
					        		{/* <div className="widget">
					        			<h3 className="wg-title">Instagram</h3>
					        			<div className="cms-instagram-pics clearfix">
					        				<div className="cms-instagram-item col-xs-4 col-sm-4 col-md-4 col-lg-4 nopaddingall">
					        					<a href="https://www.instagram.com/p/BFPML9RLuPx/" target="_self">
					        						<img src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13129357_128323507573655_1087642050_n.jpg" alt="" />
					        					</a>
					        				</div>
					        				<div className="cms-instagram-item col-xs-4 col-sm-4 col-md-4 col-lg-4 nopaddingall">
					        					<a href="https://www.instagram.com/p/BFMeTqVruIg/" target="_self">
					        						<img src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13118181_864214090355617_1672141617_n.jpg" alt="" />
					        					</a>
					        				</div>
					        				<div className="cms-instagram-item col-xs-4 col-sm-4 col-md-4 col-lg-4 nopaddingall">
					        					<a href="https://www.instagram.com/p/BFCHcH3ruA8/" target="_self">
					        						<img src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13150973_1696973117243149_57359380_n.jpg" alt="" />
					        					</a>
					        				</div>
					        				<div className="cms-instagram-item col-xs-4 col-sm-4 col-md-4 col-lg-4 nopaddingall">
					        					<a href="https://www.instagram.com/p/BE_ZUrTLuKk/" target="_self">
					        						<img src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/13151327_1024892830911908_1975716803_n.jpg" alt="" />
					        					</a>
					        				</div>
					        				<div className="cms-instagram-item col-xs-4 col-sm-4 col-md-4 col-lg-4 nopaddingall">
					        					<a href="https://www.instagram.com/p/BE6ktwtruNX/" target="_self">
					        						<img src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12976597_276109722732640_997225312_n.jpg" alt="" />
					        					</a>
					        				</div>
					        				<div className="cms-instagram-item col-xs-4 col-sm-4 col-md-4 col-lg-4 nopaddingall">
					        					<a href="https://www.instagram.com/p/BE3VtWTLuC2/" target="_self">
					        						<img src="https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/13102314_850835805044386_184951209_n.jpg" alt="" />
					        					</a>
					        				</div>
					        			</div>
					        		</div> */}
					        		<div className="widget">
					        			<h3 className="wg-title">Categorii</h3>
					        			<ul>
												<Categories categories={categories} />
					        			</ul>
					        		</div>
					        		{/* <div className="widget widget_tag_cloud">
					        			<h3 className="wg-title">Tags</h3>
					        			<div className="tagcloud">
					        				<a href="#">audio</a>
											<a href="#">gallery</a>
											<a href="#">masonry</a>
											<a href="#">portfolio</a>
											<a href="#">post format</a>
											<a href="#">quote</a>
											<a href="#">standard</a>
											<a href="#">travel</a>
											<a href="#">video</a>
										</div>
									</div> */}
									{/* <div className="widget widget_newsletterwidget">
										<h3 className="wg-title">SUBSCRIBE</h3>
										You can subscribe here to get our latest news.
										<div className="newsletter newsletter-widget">
											<form>
												<input className="newsletter-email mb-1" type="email" value="" placeholder="Email"/>
												<input className="newsletter-submit" type="submit" value="Subscribe"/>
											</form>
										</div>
									</div> */}
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
}

export default Blog

Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
query BlogQuery {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
			}
			coverimage {
				url
      }
			description
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
  }
`
