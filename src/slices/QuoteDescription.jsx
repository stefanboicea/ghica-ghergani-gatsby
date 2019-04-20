import React from 'react'
import PropTypes from 'prop-types'



const QuoteDescription = ({ input }) => (
  <div class="section pb-8">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div data-wow-delay="0.3s" class="pb-7 custom-header-1 wow fadeInUp">
          “The world offers itself to your imagination.”
        </div>
        <div class="text-center">
          <img width="133" height="28" src="../images/assets/icon-under-title.png"  />
        </div>
        <div data-wow-delay="0.3s" class="text-center mt-6 wow fadeInUp">
          <p>Monaco was founded in 2000. It has been serving thousands of customers and has been growing ever since its finding. Our company is a nimble team of dedicated designers, <br />developers and strategists; compelled to help guide users people down the right path. Through key research and analysis, innovative ideas, and interactive design, we help <br />organizations design intuitive online experiences that generate business.</p>
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
