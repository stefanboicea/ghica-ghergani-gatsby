import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class CarouselSection extends Component {
    render() {
        const { data } = this.props
        
        return (
            <React.Fragment>
                <div className="section-content">
                    <div className="row">
                        <div className="content-box col-md-8 from-bottom delay-200">
                            <div className="hex content-icon-hex pull-left">
                                <div className="content-icon">
                                    <span aria-hidden="true" className="li_bulb"></span>
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
    
            </React.Fragment>
        )
    }
    
}

CarouselSection.propTypes = {
    data: PropTypes.any.isRequired
  }