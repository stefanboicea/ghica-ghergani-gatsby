import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class TopSection extends Component {
    render() {
        const { data } = this.props
        console.log(data)
        return (
            <React.Fragment>
                <section id="top-section">
                    <div className="top-section parallax-style">
                        <div className="parallax-overlay">
                            <div className="slider-txt-container">
                                <div id="top-carousel" className="carousel slide" data-ride="carousel">

                                    <ol className="carousel-indicators">
                                        <li data-target="#top-carousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#top-carousel" data-slide-to="1"></li>
                                        <li data-target="#top-carousel" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                    <div className="item active" >
                                                    <h2 className="thin-txt">
                                                        Primul
                                                    </h2>
                                                    <p className="bold-txt">
                                                        Da
                                                    </p>
                                                    <p className="thin-txt">
                                                        Da
                                                    </p>
                                                    <p className="link">
                                                        <a href="#" className="btn custom-btn angle-effect">Află mai multe</a>
                                                    </p>
                                                </div>

                                        {data.carousel.map(item => {
                                            return (
                                                <div className="item" key={item.toptext}>
                                                    <h2 className="thin-txt">
                                                        {item.toptext}
                                                    </h2>
                                                    <p className="bold-txt">
                                                        {item.middletext}
                                                    </p>
                                                    <p className="thin-txt">
                                                        {item.buttomtext}
                                                    </p>
                                                    <p className="link">
                                                        <a href="#" className="btn custom-btn angle-effect">Află mai multe</a>
                                                    </p>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <a className="slide-nav left" href="#top-carousel" data-slide="prev"><span></span></a>
                                    <a className="slide-nav right" href="#top-carousel" data-slide="next"><span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

TopSection.propTypes = {
    data: PropTypes.any.isRequired
}

