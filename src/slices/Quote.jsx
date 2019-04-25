import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const BlockQuote = styled.blockquote`
  max-width: ${props => props.theme.maxWidthText};
`

const Quote = ({ input }) => {
  if (!input.primary.quote_text) return null

  return   <div className="section pb-8">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div data-wow-delay="0.3s" className="pb-7 custom-header-1 wow fadeInUp">
          {input.primary.quote_text}
        </div>
        <div className="text-center">
          <img width="133" height="28" src="../images/assets/icon-under-title.png"  />
        </div>
        
      </div>
    </div>
  </div>
</div>

}

export default Quote

Quote.propTypes = {
  input: PropTypes.object.isRequired,
}
