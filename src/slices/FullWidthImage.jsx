import React from 'react'
import PropTypes from 'prop-types'



const FullWidthImage = ({ input }) => (
    <div className="section mt-2 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="cms-fancyboxes-wraper cms-fancy-box-single cms-fancybox-single-about">
                        <div className="cms-fancyboxes-body">
                            <div className="cms-fancybox-item row has-image">
                                <div data-wow-delay="0.3s" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow flipInY">
                                    <img src="../images/image_570x300.jpg" alt="" />
                                </div>
                                <div data-wow-delay="0.3s" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow fadeInRight">
                                    <div className="fancy-box-content-inner">
                                        <div className="fancy-box-content-inner2">
                                            <h2>OUR MISSION</h2>
                                            <p>
                                                Throughout the project you’ll always know exactly where things stand and where they’re headed. Every project is assigned a dedicated project manager to keep things on target and keep you informed.
														</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default FullWidthImage

FullWidthImage.propTypes = {
    input: PropTypes.object
}
