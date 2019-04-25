import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'



export default class Listing extends Component {
  render() {
    const { posts } = this.props
    
    return (
      <>
        {posts.map(post => {
          let categories = false
          if (post.node.data.categories[0].category) {
            categories = post.node.data.categories.map(c => c.category.document[0].data.name)
          }
          return  <ListItem key={post.node.uid} node={post.node} categories={categories} />
        })}
      </>
    )
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
}
