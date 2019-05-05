import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, SliceZone, SEO,LatestPosts } from '../components'

import website from '../../config/website'




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
					{data.title.text !== 'Acasa' && <div id="page-title" className="page-title" style={{ backgroundImage: 'url(' + data.coverimage.url + ')' }}>
						<div className="container">
							<div className="row">
								<div id="page-title-text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center" >
									<h1>{data.title.text}</h1>
									<div className="page-sub-title">{data.description}</div>
								</div>
							</div>
						</div>
					</div>}

					<SliceZone allSlices={data.page_content} />
							<LatestPosts data={posts} />
					{/* <div className="section">
						<div className="container-fluid">
						

						</div>
					</div> */}
				</div>
			</React.Fragment>
		</Layout>
	)
}

export default Page

Page.propTypes = {
	data: PropTypes.shape({
		prismicPage: PropTypes.object,
	}),
	location: PropTypes.object,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
			id
			uid
			data {
				title {
					text
				}
				description
				coverimage {
					url
				}
				page_content {
					... on PrismicPagePageContentVideoRow {
						slice_type
						id
						items {
						  video_link {
							url
						  }
						  video_title
						  video_description
						}
					  }
					... on PrismicPagePageContentFancyRow {
						slice_type
						id
						items {
							icon {
								url
							}
							title1 
							subtitle1
						}
					}
					... on PrismicPagePageContentQuoteSimple {
						slice_type
						id
						primary {
							quote_text 
						}
					}
					... on PrismicPagePageContentImageGallery {
						slice_type
						id
						primary {
							gallery_title {
								text
							}
						}
						items {
							sort_order
							image_description {
								text
							}
							image {
								url
							}
							link_label {
								text
							}
						}
					}
					... on PrismicPagePageContentBannerGallery {
						slice_type
						id
						items {
						  image_description {
							text
						  }
						  image {
							url
						  }
						  link_label {
							text
						  }
						}
					  }
					... on PrismicPagePageContentQuoteDetail {
						slice_type
						id
						primary {
							quote
							description1
						}
					}
					... on PrismicPagePageContentFullWidthImage{
						slice_type
						id
						primary {
							image {
								url
							}
							headtext: headline
						}
					}
					... on PrismicPagePageContentImageHighlight {
						slice_type
						id
						primary {
							featured_image {
								url
							}
							position
							title {
								text
							}
							headline {
								text
							}
						}
					}
					... on PrismicPagePageContentClients {
						slice_type
						id
						items {
							full_name {
								text
							}
							portrait {
								url
							}
						}
					} 
					 ... on PrismicPagePageContentTeam {
						slice_type
						id
						primary {
							team_section {
								text
							}
						}
						items {
							first_and_lastname {
								text
							}
							position {
								text
							}
							portrait {
								url
							}
						}
					}
				}
			}
		}
		posts: allPrismicPost(limit: 3,sort: {fields: [data___date], order: DESC}) {
			edges {
			  node {
				uid
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

