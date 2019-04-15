import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class TopSection extends Component {
    render() {
        const { data } = this.props
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

                                        <div className="item active">
                                            <h2 className="thin-txt">
                                                Suntem la Florești
									</h2>
                                            <p className="bold-txt">
                                                ARTĂ /  CULTURĂ / MEȘTEȘUG
									</p>
                                            <p className="thin-txt">
                                                Domeniul Cantacuzino
									</p>
                                            <p className="link">
                                                <a href="#" className="btn custom-btn angle-effect">Află mai multe</a>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <h2 className="thin-txt">
                                                O organizatie nonprofit
									</h2>
                                            <p className="bold-txt">
                                                Pentru protejarea patrimoniului
									</p>
                                            <p className="thin-txt">
                                                Hai să înaintăm
									</p>

                                            <p className="link">
                                                <a href="#" className="btn custom-btn angle-effect">afla mai multe</a>
                                            </p>
                                        </div>

                                        <div className="item">
                                            <h2 className="thin-txt">
                                                Copii sunt viitorul
									</h2>
                                            <p className="bold-txt">
                                                Noi încurajăm învățământul
									</p>
                                            <p className="thin-txt">
                                                Alătură-te cauzei noastre
									</p>

                                            <p className="link">
                                                <a href="#" className="btn custom-btn angle-effect">află mai multe</a>
                                            </p>
                                        </div>
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

