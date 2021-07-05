import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CompletedRecipes from './pages/CompletedRecipes';

import DrinkDetails from './pages/DrinkDetails';
import DrinkInProgress from './pages/DrinkInProgress';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreByRegion from './pages/ExploreByRegion';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksByIngredients from './pages/ExploreDrinksByIngrediente.1';
import ExploreMealsByIngredients from './pages/ExploreMealByIngrediente';
import ExploreMeals from './pages/ExploreMeals';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import MealDetails from './pages/MealDetails';
import MealInProgress from './pages/MealInProgress';
import Meals from './pages/Meals';
import Profile from './pages/Profile';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/bebidas/:id/in-progress" component={ MealInProgress } />
        <Route exact path="/comidas/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/bebidas/:id" component={ DrinkDetails } />
        <Route exact path="/comidas/:id" component={ MealDetails } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route exact path="/explorar/comidas" component={ ExploreMeals } />
        <Route exact path="/explorar/bebidas/ingredientes" component={ ExploreDrinksByIngredients } />
        <Route exact path="/explorar/comidas/ingredientes" component={ ExploreMealsByIngredients } />
        <Route exact path="/explorar/comidas/area" component={ ExploreByRegion } />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/receitas-feitas" component={ CompletedRecipes } />
        <Route exact path="/receitas-favoritas" component={ Favorites } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
