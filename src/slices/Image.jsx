import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const Image = ({ input }) =>{
  return  <img src={input.primary.image.url} ></img>
  

  }

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
