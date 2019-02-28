import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CategoriesList extends Component {

    renderCategory = (category) => {
      return (
          <li key={category}>
              <Link to={ `/category/${category}` }>{category}</Link>
          </li>
       )
    }
  
    render() {
      const { categories } = this.props
      return (
        <div className="category-list">
          <h2>Categories list</h2>
  
          { !categories && 'Loading...' }
  
          {
            categories &&
            <ul>{ categories.map(this.renderCategory) }</ul>
          }
        </div>
      )
    }
}
