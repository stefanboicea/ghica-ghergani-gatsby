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
     page
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
        title {
          text
        }
        description
      }
    }
  }
`

// coverimage {
//   localFile {
//     childImageSharp {
//       fluid(maxWidth: 1200, quality: 90) {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// }