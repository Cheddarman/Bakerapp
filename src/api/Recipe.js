import store from '../store'
import axios from 'axios'
import * as actions from '../actions.js'

const initialState = {
	recipes:[]
}

export function getRecipes() {
	axios.get('http://localhost:3001/recipes').then(results=>{
		store.dispatch({
			type:actions.GET_RECIPES,
			recipes: results.data
		})
	})
}

export function getRecipe(id) {
	axios.get('http;//localhost:3001/recipes' + id).then(results=>{
		store.dispatch({
			type:actions.GET_RECIPE,
			recipe: results.date
		})
	})
}

export function addRecipe(obj) {
	axios.post('http://localhost:3001/recipes', obj)
}