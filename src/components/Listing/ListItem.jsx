import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Categories from './Categories'



export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props
    const link = '/blog/' + node.uid
    return (
      <div className="cms-grid-item col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="blog-wrapper">
        <div className="entry-header">
          <h2 className="entry-title"><a href={link}>{node.data.title.text}</a></h2>
          <div className="entry-meta cms-meta">
            <ul className="list-unstyled list-inline">
              <li className="detail-date"><a href="#">{node.date}</a></li>
              {/* <li className="detail-author"><a href="#">admin</a></li>
              <li className="detail-terms"><a href="#">Featured</a></li>
              <li className="detail-comment"><a href="#">0 Comments</a></li> */}
            </ul>
          </div>
        </div>
        <div className="entry-content">
          <div className="entry-media">
            <img width="1000" height="676" src={node.data.coverimage.url} alt="" />
          </div>
        </div>
      </div>
    </div> 
    )
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}
