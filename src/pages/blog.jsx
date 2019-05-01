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
          desc={website.description}
        />
        <React.Fragment>

        <div id="main" className="main clearfix">
				<div id="page-title" className="page-title" style={{backgroundImage: 'url(../images/background/background_1920x400.jpg)'}}> 
					<div className="container text-center">
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
						<div className="col-md-2 col-lg-2"></div>
							<div className="col-sm-12 col-md-8 col-lg-8 mb-5">
								<div className="cms-blog cms-blog-standard grid-1">
									<div className="cms-isotope-grid-post row clearfix">
								
								{items}
								
									</div>
									         
					            </div>
					        </div>
					        {/* <div id="page-sidebar" className="col-sm-12 col-md-4 col-lg-4">
					        	<div id="secondary" className="widget-area">
					        		<div className="widget">
					        			<h3 className="wg-title">Inspiratiile noastre zilnice</h3>
					        			<p>
					        				Cherish your solitude. Take trains by yourself to places you have never been. Sleep out alone under the stars. Learn how to drive a stick shift. Go so far away that you stop being afraid of not coming back. Say no when you don’t want to do something. Say yes if your instincts are strong, even if everyone around you disagrees. Decide whether you want to be liked or admired. Decide if fitting in is more important than finding out what you’re doing here. Believe in kissing.
					        			</p>
					        		</div>
					        	
					        		<div className="widget">
					        			<h3 className="wg-title">Categorii</h3>
					        			<ul>
												<Categories categories={categories} />
					        			</ul>
					        		</div>
								</div>
							</div> */}
					    
              
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
