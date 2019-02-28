import React, { Component } from 'react'
import request from 'superagent'
import Recipe from './Recipe';


export default class CocktailRecipe extends Component {
    
    state = {
        data: null
    }
    
    componentDidMount = () => {
    
        const id = this.props.match.params.id
        request
          .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`)
          .then(response => {
              const drink = response.body.drinks[0]
              const data = {
                  name: drink.strDrink,
                  alcoholic: drink.strAlcoholic,
                  category: drink.strCategory,
                  image: drink.strDrinkThumb,
                  glass: drink.strGlass,
                  instructions: drink.strInstructions,
                  ingredients: Object.entries(drink).filter(
                                    ([key, value]) => key.includes('strIngredient') && value.trim())
                                    .map(el => el[1]),
                  measures: Object.entries(drink).filter(
                                    ([key, value]) => key.includes('strMeasure') && value.trim())
                                    .map(el => el[1])
              }
              
              this.updateRecipe(data)

          })
          .catch(console.error)
    }
    
    updateRecipe = (recipe) => {
        this.setState({
            data: recipe
          })
    }
    

    render(){
        return (
            <div>
                <Recipe props={this.state.data}/>
            </div>
        )
    }
}