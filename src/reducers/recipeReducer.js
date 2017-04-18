import * as actions from '../actions'

const initialState = {
	recipes: [],
	currentRecipe: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case actions.GET_RECIPES:
			return {...state, recipes:action.recipies}
		case actions.GET_RECIPE:
			return {...state, currentRecipe:action.recipies}
		default:
			return state
	}
}