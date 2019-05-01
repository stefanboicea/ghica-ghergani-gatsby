import React from 'react'
import PropTypes from 'prop-types'



const QuoteDescription = ({ input }) => (
  
  <div className="section pb-8">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div data-wow-delay="0.3s" className="pb-7 custom-header-1 wow fadeInUp">
          {input.primary.quote}
        </div>
        <div className="text-center">
          <img width="133" height="28" src={'../images/assets/icon-under-title.png'}  />
        </div>
        <div data-wow-delay="0.3s" className="text-center mt-6 wow fadeInUp">
          <p>{input.primary.description1}</p>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default QuoteDescription

QuoteDescription.propTypes = {
  input: PropTypes.object,
}
