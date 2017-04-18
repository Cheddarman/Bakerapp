import React from 'react'
import {Link} from 'react-router-dom'

class MRShort extends React.Component {
 
  render() {
    return (
      <div className='ShortBit'>
      	<div className='TitleBit'>
        	<h5>My Recipes</h5><span className='line' /><p className='view'>View all ></p>
        </div>
        <div className='boxes'>
        	<Link to={'/AddRecipe/'}><p><span>+</span><br />Add Recipe</p></Link><img alt='' /><img alt='' /><img alt='' /><img alt='' />
        </div>
      </div>
    )
  }
}
export default MRShort