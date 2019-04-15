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
                                <SimpleSection data={sectiuni.edges[0].node.data}></SimpleSection>
                                <CarouselSection data={sectiuni.edges[1].node.data}></CarouselSection>

                            </div>
                        </div>

                        <IframeSection data={sectiuni.edges[2].node.data}></IframeSection>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

AboutSection.propTypes = {
    data: PropTypes.any.isRequired
}

