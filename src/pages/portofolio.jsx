import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import { TopSection, AboutSection, AboutParalaxSection, CausesSection, TestimonalSection, EventsSection, PricingSection, ServiceSection, VolunteerSection, NewsSection, Gallery, ClientsSection, ContactSection, TeamSection } from '../components/Section';
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import website from '../../config/website'

class Portofolio extends Component {
    render() {
        const {
            data: { posts },
        } = this.props
        return (
            <Layout customSEO>
                <SEO
                    title={`${website.titleAlt}`}
                    pathname={location.pathname}
                    desc={website.description}
                />
                <React.Fragment>
                    test
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
    posts: allPrismicPost(limit: 4, sort: { fields: [data___date], order: DESC }) {
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
