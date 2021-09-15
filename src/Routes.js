import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Homepage from './components/Homepage'
import AddRecipe from './components/AddRecipe'
import EditRecipe from './components/EditRecipe'
import DeleteRecipe from './components/DeleteRecipe'

export default (
    <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route path = '/home/:id' component = {Homepage} />
        <Route path = '/addRecipe/:id' component = {AddRecipe} />
        <Route path = '/editRecipe/:id' component = {EditRecipe} />
        <Route path = '/deleteRecipe/:id' component = {DeleteRecipe} />
    </Switch>
)