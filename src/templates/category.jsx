import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Listing, Wrapper,  SEO, Header } from '../components'
import website from '../../config/website'




const CatWrapper = ''

const Category = ({
  pageContext: { category },
  data: {
    posts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Category: ${category} | ${website.titleAlt}`} pathname={location.pathname} />
      
      <React.Fragment>
    <div id="main" className="main clearfix">
				<div id="page-title" className="page-title" style={{backgroundImage: 'url(/images/background/background_1920x400.jpg)'}}> 
					<div className="container">
						<div className="row">
							<div id="page-title-text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
								<h1>{category}</h1>
								<div className="page-sub-title">{totalCount} {totalCount === 1 ? 'Postare' : 'Postari'} in categoria "{category}"</div>
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

        {/* {totalCount} {totalCount === 1 ? 'Post' : 'Posts'} {totalCount === 1 ? 'was' : 'were'} tagged with "{category}" */}
        <Listing posts={edges} /> 
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
					        	
					        		<div className="widget">
					        			<h3 className="wg-title">Categorii</h3>
					        			<ul>
												{/* <Categories categories={categories} /> */}
					        			</ul>
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

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: { elemMatch: { category: { document: { elemMatch: { data: { name: { eq: $category } } } } } } }
        }
      }
    ) {
      totalCount
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
