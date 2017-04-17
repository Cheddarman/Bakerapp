import React from 'react'
class AddRecipe extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='MainAddArea'>
        <div className='TitleBit'>
        	<h5>Basic Info</h5><span className='line' />
        </div>
        <form className='RForm'>
	        <a href=""><p><span>+</span><br />Add Image</p></a>
  	      <div className='addimginputblok'>
  	      	<input id='RName' placeholder='Recipe Name' name='Recipe Name'/>
  	      	<input id='By' placeholder='By' name='By'/>
  	      	<input id='public' type='radio' name='public'/><label htmlFor='public'>Make it Public</label>
  	      	<input id='private' type='radio' name='public'/><label htmlFor='private'>Keep it Private</label>
  	      </div>
  	      <select>
  	      	<option>Breakfast</option>
  	      	<option>Lunch</option>
  	      	<option>Dinner</option>
  	      	<option>Dessert</option>
  	      </select>
  	      <input id='PTime' type='text' placeholder='Prep Time' name='Prep Time'/>
  	      <input id='CTime' type='text' placeholder='Cook Time' name='Cook Time'/>
  	      <input id='CTemp' type='text' placeholder='Cook Temp' name='Cook Temp'/>
  	      <select name='Temp'>
  	      	<option>Farinheit</option>
  	      	<option>Celcius</option>
  	      </select>
  	      <p>This Recipe will Make</p>
  	      <input id='amount' type='text' placeholder='Amount' name='Amount' />
  	      <input id='type' tyoe='text' placeholder='cookies, loaves, ect' name='Type' />
  	      <div className='TitleBit'>
        		<h5>Step</h5><span className='line' />
        	</div>
  	    </form>  
      </div>
    )
  }
}
export default AddRecipe