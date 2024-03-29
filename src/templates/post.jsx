import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'
import Img from 'gatsby-image'
import Background from '../../images/background/background_1920x400.jpg';

const PostWrapper = styled.div

const Post = ({ data: { prismicPost, posts }, location }) => {
	const { data } = prismicPost
	let categories = false
	if (data.categories[0].category) {
		categories = data.categories.map(c => c.category.document[0].data.name)
  }
  
  let coverVideo = <iframe width="1170" height="790" src={prismicPost.data.cover_video ? prismicPost.data.cover_video.url : ''} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	let coverImage = <img width="1170" height="790" src={prismicPost.data.coverimage ? prismicPost.data.coverimage.url : ''} alt="" />

	return (
		<Layout customSEO>
			<SEO
				title={`${data.title.text} | ${website.titleAlt}`}
				pathname={location.pathname}
				desc={data.description}
				node={prismicPost}
				article
			/>
			<React.Fragment>
				<div id="main" className="main clearfix">
					<div id="page-title" className="page-title" style={{ backgroundImage:`url(${Background})` }}>
						<div className="container">
							<div className="row">
								<div id="page-title-text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
									<h1>Noutati</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="section">
						<div className="container">
							<div className="row">
              <div className="col-md-2 col-lg-2"></div>
								<div className="col-sm-12 col-md-8 col-lg-8 mb-5">
									<div className="single-post">
										<article>
											<div className="entry-media">
                      {prismicPost.data.post_type === 'video' ? coverVideo : coverImage}
											</div>
											<div className="entry-header">
												<h2 className="entry-title">{prismicPost.data.title.text}</h2>
												<div className="entry-meta cms-meta">
													<ul className="list-unstyled list-inline">
														<li className="detail-date"><a href="#">{prismicPost.data.date}</a></li>
													</ul>
												</div>
											</div>
											<div className="entry-content">
												
											<SliceZone allSlices={data.body} />

											</div>
											{/* <div className="entry-footer clearfix">
												<span className="post-share-title left">
													<span className="h6"><i className="pe-7s-share"></i> Share</span>
													<span className="post-share">
														<a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
														<a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
														<a target="_blank" href="#"><i className="fa fa-pinterest"></i></a>
														<a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
														<a target="_blank" href="#"><i className="fa fa-linkedin"></i></a>
													</span>
												</span>
											</div> */}
										</article>
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

export default Post

Post.propTypes = {
	data: PropTypes.shape({
		prismicPost: PropTypes.object.isRequired,
	}).isRequired,
	location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        post_type
        cover_video {
          url
        }
        title {
          text
        }
        coverimage {
          url
        }
        description
        date(formatString: "MMMM Do, YYYY")
        categories {
          category {
            document {
              data {
                name
              }
            }
          }
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                url
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }) {
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
  }
`
