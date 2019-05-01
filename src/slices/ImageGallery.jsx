import React from 'react'
import PropTypes from 'prop-types'

const ImageGallery = ({ input }) => {
    let items = []
    let sortedItems = input.items.sort((a,b)=> a.sort_order - b.sort_order)
    
    // for (const [index, item] of sortedItems.entries()) {
        for(let index=0;index<sortedItems.length;index++) {
            let item = sortedItems[index]
        items.push(
            <div className="text-center cms-grid-item col-lg-4 col-md-4 col-sm-6 col-xs-12" key={index} sort={item.sort_order}>
                <div className="cms-grid-content overlay-wrap">
                    <img width="835" height="565" src={item.image.url} alt="" />
                    <div className="overlay">
                        <div className="overlay-content">
                            <div className="h4">
                                <a href="#">{item.image_description.text}</a>
                            </div>
                            <div className="cms-grid-categories">
                                <a href="#">{item.link_label.text}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <React.Fragment>
        <div className="section pt-8">
            <div className="container">
                <div className="row">
                    <div data-wow-delay="0.3s" className="col-sm-12 wow fadeInUp">
                        <h1 className="text-center">OUR PORTFOLIO</h1>
                        <p className="desc">Check out our recent works</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section pb-7">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cms-grid-wraper">
                            <div className="row cms-grid cms-grid-masonry" >
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
}

export default ImageGallery

ImageGallery.propTypes = {
    input: PropTypes.object
}
