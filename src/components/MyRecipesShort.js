import React from 'react'
class MRShort extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='ShortBit'>
      	<div className='TitleBit'>
        	<h5>My Recipes</h5><span className='line' /><p className='view'>View all ></p>
        </div>
        <div className='boxes'>
        	<a href=""><p><span>+</span><br />Add Recipe</p></a><img /><img /><img /><img />
        </div>
      </div>
    )
  }
}
export default MRShort