import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class SimpleSection extends Component {
    render() {
        const { data } = this.props
        return (
            <React.Fragment>
                <div className="section-head">
                    <h2 className="section-title">{data.titlu}</h2>
                    <p className="section-description">
                        {data.subtitlu}
							</p>
                </div>
            </React.Fragment>
        )
    }
}

SimpleSection.propTypes = {
    data: PropTypes.any.isRequired
}
