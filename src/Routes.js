import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Homepage from './components/Homepage'
import NewRecipe from './components/NewRecipe'
import EditRecipe from './components/EditRecipe'
import DeleteRecipe from './components/DeleteRecipe'

export default (
    <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route path = '/home' component = {Homepage} />
        <Route path = '/newRecipe' component = {NewRecipe} />
        <Route path = '/editRecipe/:id' component = {EditRecipe} />
        <Route path = '/deleteRecipe/:id' component = {DeleteRecipe} />
    </Switch>
)