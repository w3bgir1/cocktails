import React, { Component } from 'react'
import './App.css'
import CategoriesListContainer from './components/CategoriesListContainer'
import CategorieImagesContainer from './components/CategorieImagesContainer'
import { Route } from 'react-router-dom'
import CocktailRecipeContainer from './components/CocktailRecipeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Wanna drink?</h1>
        </header>
        <main>
         <Route exact path="/" component={CategoriesListContainer} />
         <Route path="/recipe/:id" component={CocktailRecipeContainer} />
         <Route path="/category/:category" component={CategorieImagesContainer} />
        </main>
      </div>
    )
  }
}

export default App;
