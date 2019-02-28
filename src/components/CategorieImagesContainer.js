import React, { Component } from 'react'
import request from 'superagent'
import CategorieImages from './CategorieImages'

export default class CategorieImagesContainer extends Component {

    state = {
        images: null,
        title: null,
        id: null
    }

    componentDidMount() {

        const path = this.props.location.pathname.replace(' ', '_').substring(10)
        request
          .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(path)}`)
          .then(response => {
              this.updateImages(response.body.drinks.map(el => el.strDrinkThumb))
              this.updateTitle(response.body.drinks.map(el => el.strDrink))
              this.updateId(response.body.drinks.map(el => el.idDrink))
          })
          .catch(console.error)
    }

    updateImages(images) {
        this.setState({
          images: images
        })
    } 

    updateTitle(title) {
        this.setState({
            title: title
          })
    }

    updateId(id) {
        this.setState({
            id: id
          })
    }

    render(){
        return <CategorieImages props={this.props} images={ this.state.images } title={ this.state.title } id={this.state.id}/>
    }
}

