import React from 'react'
import PropTypes from 'prop-types'

const QuoteNoDesctiption = ({ input }) => (
   <div className="section pb-8">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div data-wow-delay="0.3s" className="pb-7 custom-header-1 wow fadeInUp">
          {input.primary.quote_text.text}
        </div>
        <div className="text-center">
          <img width="133" height="28" src="../images/assets/icon-under-title.png"  />
        </div>
        
      </div>
    </div>
  </div>
</div>

)

export default QuoteNoDesctiption

QuoteNoDesctiption.propTypes = {
  input: PropTypes.object
}
