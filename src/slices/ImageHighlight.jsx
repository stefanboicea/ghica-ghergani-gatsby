import React from 'react'
import PropTypes from 'prop-types'



const ImageHighlight = ({ input }) => {

    if(input.primary.position === 'left')
    return (
    <div className="section mt-2 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="cms-fancyboxes-wraper cms-fancy-box-single cms-fancybox-single-about">
                        <div className="cms-fancyboxes-body">
                            <div className="cms-fancybox-item row has-image">
                                <div data-wow-delay="0.3s" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow flipInY">
                                    <img src={input.primary.featured_image.url} alt="" />
                                </div>
                                <div data-wow-delay="0.3s" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow fadeInLeft">
                                    <div className="fancy-box-content-inner">
                                        <div className="fancy-box-content-inner2">
                                            <h2>{input.primary.title.text}</h2>
                                            <p>
                                                {input.primary.headline.text}
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
    else return (
        <div className="section mt-2 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="cms-fancyboxes-wraper cms-fancy-box-single cms-fancybox-single-about">
                        <div className="cms-fancyboxes-body">
                            <div className="cms-fancybox-item row has-image">
                            <div data-wow-delay="0.3s" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow fadeInRight">
                                    <div className="fancy-box-content-inner">
                                        <div className="fancy-box-content-inner2">
                                            <h2>{input.primary.title.text}</h2>
                                            <p>
                                                {input.primary.headline.text}
														</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 wow flipInY">
                                    <img src={input.primary.featured_image.url} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ImageHighlight

ImageHighlight.propTypes = {
    input: PropTypes.object
}
