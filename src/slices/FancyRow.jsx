import React from 'react'
import PropTypes from 'prop-types'

const FancyRow = ({ input }) => {
    let items = []
    for (const [index, item] of input.items.entries()) {
        items.push(
            <div data-wow-delay="0.3s" className="col-md-6 col-sm-6 pull-left wow fadeInLeft" key={index}> 
            <div className="cms-fancyboxes-wraper cms-fancy-box-single" >
                <div className="cms-fancyboxes-body">
                    <div className="cms-fancybox-item">
                        <div className="fancy-box-icon pull-left">
                            <div className="fancy-box-icon-inner">
                                <i className="pe-7s-coffee"></i>
                            </div>
                        </div>
                        <div className="fancy-box-content-wrap has-icon-image">
                            <h4>{item.title1}</h4>
                            <div className="fancy-box-content">
                                <p>{item.subtitle1}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className="section pb-7">
            <div className="container">
                <div className="row">
                   {items}
                </div>
            </div>
        </div>

    )
}

export default FancyRow

FancyRow.propTypes = {
    input: PropTypes.object
}
