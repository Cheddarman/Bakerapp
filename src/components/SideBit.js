import React from 'react'
class SideNav extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='sidebar'>
        <ul>
        	<li>My Recipes</li>
        	<li>_______</li>
        	<li>Public Recipes</li>
        	<li>_______</li>
        	<li>Popular Recipes</li>
        	<li>_______</li>
        	<li>My Favorite Recipes</li>
        	<li>_______</li>
        	<li>My Pantry</li>
        </ul>
      </div>
    )
  }
}
export default SideNav