import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class AboutSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                <section id="about">
                    <div className="about-section">
                        <div className="white-bg angular section-padding">
                            <div className="top-angle">
                            </div>
                            <div className="container">
                                <div className="section-head">
                                    <h2 className="section-title">{data.title}</h2>
                                    <p className="section-description">
                                        {data.subtitle}
                                    </p>
                                </div>

                                <div className="section-content">
                                    <div className="row">
                                        <div className="content-box col-md-8 from-bottom delay-200">
                                            <div className="hex content-icon-hex pull-left">
                                                <div className="content-icon">
                                                    <span aria-hidden="true" className="li_bulb"></span>
                                                </div>
                                            </div>
                                            <h3 className="content-title">{data.carouseltitle}</h3>
                                            <p>
                                                <strong>{data.carouselsubtitle}</strong>
                                            </p>
                                            <p>
                                                {data.carouseldescription}
                                            </p>
                                        </div>

                                        <div className="media-content media-right col-md-4 from-bottom delay-600">
                                            <div className="meida-container">
                                                <div id="about-img-carousel" className="about-img-carousel carousel slide" data-ride="carousel">
                                                    <ol className="carousel-indicators">
                                                        <li data-target="#about-img-carousel" data-slide-to="0" className="active"></li>
                                                        <li data-target="#about-img-carousel" data-slide-to="1"></li>
                                                        <li data-target="#about-img-carousel" data-slide-to="2"></li>
                                                    </ol>
                                                    <div className="carousel-inner">

                                                        <div className="item active">
                                                            <img src="images/about-carousel/01.jpg" alt="carousel image" />
                                                        </div>
                                                        <div className="item">
                                                            <img src="images/about-carousel/02.jpg" alt="carousel image" />
                                                        </div>
                                                        <div className="item">
                                                            <img src="images/about-carousel/03.jpg" alt="carousel image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

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
                                            <h3 className="content-title">{data.iframetitle}</h3>
                                            <p>
                                                <strong>{data.iframesubtitle}</strong>
                                            </p>
                                            <p>
                                                {data.iframedescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-angle">
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

AboutSection.propTypes = {
    data: PropTypes.any.isRequired
}

