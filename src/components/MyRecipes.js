import React from 'react'
class MyRecipesCont extends React.Component {
  getInitialState() {
  	recipes:[]
  },
  componentWillMount() {
  	this.unsubscribe = store.subscribe(()=>{
  		const appState = store.getState()

  		this.setState({
  			recipes: appState.recipes
  		})
  	})
  	getRecipes()
  },
  componentWillUnmount() {
  	this.unsubscribe()
  },
  render() {
    <MyRecipes recipes={this.state.recipes} />
  }
}

const MyRecipes = (props) =>(
	<div className='ViewAll'>
		
	</div>
)

export default MyRecipesCont