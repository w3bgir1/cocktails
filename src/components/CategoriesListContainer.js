import React, { Component } from 'react'
import request from 'superagent'
import CategoriesList from './CategoriesList'

export default class CategoriesListContainer extends Component {

    state = { drinks: null }

    componentDidMount = () => {
        request
          .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
          .then(response => response.body.drinks.map(el => Object.values(el)))
          .then(res => this.updateList(res))
          .catch(console.error)
    }

    updateList = (item) => {
        this.setState({
          drinks: item
        })
        
    }

    render() {
        return (
            <CategoriesList categories={this.state.drinks}/>
        )
    }
}