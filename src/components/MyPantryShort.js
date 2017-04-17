import React from 'react'
class MPShort extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
		  <div className='ShortBit'>
      	<div className='TitleBit'>
        	<h5>My Pantry</h5><span className='line' /><p className='view'>View all ></p>
        </div>
        <div className='boxes'>
        	<img /><img /><img /><img /><img />
        </div>
      </div>
    )
  }
}
export default MPShort