import React from 'react'
import PropTypes from 'prop-types'

const VideoRow = ({ input }) => {
    let items = []
    for (const [index, item] of input.items.entries()) {
        items.push(
            <div data-wow-delay="0.3s" className="cms-grid-item text-center col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInUp" key={index}>
            <div className="cms-grid-media overlay-wrap has-thumbnail">
            <iframe src="https://www.youtube.com/embed?v=WOC5kHtn_x4" frameBorder="0" height="250" allowFullScreen=""></iframe>
                
              
            </div>
            <h4 className="cms-grid-title">{item.video_title}</h4>
            <div className="cms-grid-content">
            {item.video_description}
            </div>
            {/* <div className="cms-grid-link">
                <a className="more-link" href={item.}>Read more &rarr;</a>
            </div> */}
        </div>
        )
    }

    return (
        <div className="section pb-9">
        <div className="container">
            <div className="row">
                <div className="cms-grid-wraper">
                    <div className="cms-grid">
                    {items}
                    
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default VideoRow

VideoRow.propTypes = {
    input: PropTypes.object
}


