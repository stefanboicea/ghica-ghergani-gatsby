import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class GalleryItem extends Component {
    render() {
        const { item } = this.props
        const tagList = ['item'].concat(item.tags).join(' ')
        return (
            <React.Fragment>
                <figure className={tagList}>
                    <img src={item.data.imagine.url}  />
                    <div className="item-link">
                        <a className="link-hex" href={item.data.imagine.url} data-rel="prettyPhoto">
                            <span>
                                <i className="fa fa-plus"></i>
                            </span>
                        </a>
                    </div>{/*/.item-link */}
                    <figcaption className="item-description">
                        <h4 className="item-title">
                            {item.data.titlu.text}
                        </h4>{/*/.item-title */}
                        <p className="gallery-item-description">
                            {item.data.descriere.text}
                        </p>{/*/.gallery-item-description */}
                    </figcaption>
                </figure>
            </React.Fragment>
        )
    }
}

GalleryItem.propTypes = {
    item: PropTypes.any.isRequired
}

