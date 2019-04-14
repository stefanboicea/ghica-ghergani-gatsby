import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class IframeSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                <div className="gray-bg angular section-padding">
                    <div className="top-angle"></div>
                    <div className="container">
                        <div className="row">
                            <div className="section-content">
                                <div className="media-content media-left col-md-4 from-bottom delay-200">
                                    <div className="meida-container video-container">
                                        <iframe src="//www.youtube.com/embed/WOC5kHtn_x4" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>

                                <div className="content-box col-md-8 from-bottom delay-600">
                                    <div className="hex content-icon-hex pull-left">
                                        <div className="content-icon">
                                            <span aria-hidden="true" className="li_params"></span>
                                        </div>
                                    </div>
                                    <h3 className="content-title">{data.titlu.text}</h3>
                                    <p>
                                        <strong>{data.subtitlu.text}</strong>
                                    </p>
                                    <p>
                                        {data.descriere.text}
									</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-angle">
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

IframeSection.propTypes = {
    data: PropTypes.any.isRequired
}

