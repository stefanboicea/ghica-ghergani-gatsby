import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { BodyText, CodeBlock, Image, Quote, QuoteDescription, Team, Clients, ImageHighlight, FullWidthImage, FancyRow, VideoRow, BigSlider, QuoteNoDescription } from '../slices'



const Content = styled.div``

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props

    if (!allSlices) {
      return ''
    }

    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'text':
          return <BodyText key={s.id} input={s} />
        case 'image':
          return <Image key={s.id} input={s} />
        case 'quote':
          return <Quote key={s.id} input={s} />
        case 'quote_simple':
          return <QuoteNoDescription key={s.id} input={s} />
        case 'team':
          return <Team key={s.id} input={s} />
        case 'image_highlight':
          return <ImageHighlight key={s.id} input={s} />
        case 'clients':
          return <Clients key={s.id} input={s} />
        case 'full_width_image':
          return <FullWidthImage key={s.id} input={s} />
        case 'quote_detail':
          return <QuoteDescription key={s.id} input={s} />
        case 'fancy_row':
          return <FancyRow key={s.id} input={s} />
        case 'video_row':
          return <VideoRow key={s.id} input={s} />
        case 'big_slider':
          return <BigSlider key={s.id} input={s} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array,
}
