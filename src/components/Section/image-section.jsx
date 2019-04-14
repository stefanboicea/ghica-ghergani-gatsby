import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class ImageSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                <div className="row">
                    <div className="section-content">
                        <div className="media-content media-left col-md-4 from-bottom delay-200">
                            <div className="meida-container">
                                <img src="images/volunteer.jpg" alt="volunteer" />
                            </div>
                        </div>


                        <div className="content-box col-md-8 from-bottom delay-600">
                            <div className="hex content-icon-hex pull-left">
                                <div className="content-icon">
                                    <span aria-hidden="true" className="li_user"></span>
                                </div>
                            </div>{/*/.content-icon-hex */}
                            <h3 className="content-title">{data.titlu.text}</h3>
                            <p>
                                <strong>{data.subtitlu.text}</strong>
                            </p>
                            <p>
                                {data.descriere.text}
									</p>
                            <p>
                                <a href="#" className="btn custom-btn angle-effect">
                                    Apply Now
										</a>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

ImageSection.propTypes = {
    data: PropTypes.any.isRequired
}
