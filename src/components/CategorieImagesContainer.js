import React, { Component } from 'react'
import request from 'superagent'
import CategorieImages from './CategorieImages'

export default class CategorieImagesContainer extends Component {

    state = { images: null }

    componentDidMount() {

        const path = this.props.location.pathname.replace(' ', '_').substring(1)
        request
          .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(path)}`)
          .then(response => this.updateImages(response.body.drinks.map(el => el.strDrinkThumb)))
          .catch(console.error)
    }

    updateImages(images) {
        this.setState({
          images: images
        })
      } 

    render(){
        return <CategorieImages props={this.props} images={ this.state.images }/>
    }
}

