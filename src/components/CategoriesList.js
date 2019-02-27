import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CategoriesList extends Component {

    renderCategorie = (categorie) => {
      return (
          <li key={categorie}>
              <Link to={ `/${categorie}` }>{categorie}</Link>
          </li>
       )
    }
  
    render() {
      const { categories } = this.props
      return (
        <div className="categorie-list">
          <h1>Categories list</h1>
  
          { !categories && 'Loading...' }
  
          {
            categories &&
            <ul>{ categories.map(this.renderCategorie) }</ul>
          }
        </div>
      )
    }
}
