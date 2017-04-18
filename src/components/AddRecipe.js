import React from 'react'
import {addRecipe} from '../api/Recipe'

class AddRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    		id:'',
	    	rName:'',
		    by:'',
		    type: '',
		    prepTime: '',
		    cookTime: '',
		    tempType: '',
		    servingAmount: '',
		    servingType: '',
	 	   	photo: ''
    }
  }

	handleChange=(e)=>{
		e.preventDefault
		addRecipe(this.state)
	}
	handleSubmit=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}

  render() {
    return (
      <div className='MainAddArea'>
        <div className='TitleBit'>
        	<h5>Basic Info</h5><span className='line' />
        </div>
        <form className='RForm' onSubmit={this.handleSubmit}>
	        <a href=""><p id='addimage'><span>+</span><br />Add Image</p></a>
  	      <div className='addimginputblok'>
  	      	<input id='RName' placeholder='Recipe Name' onChange={this.handleChange} name='rName' value={this.rName}/>
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
  	      <input id='PTime' type='text' placeholder='Prep Time' name='PrepTime'/>
  	      <input id='CTime' type='text' placeholder='Cook Time' name='CookTime'/>
  	      <input id='CTemp' type='text' placeholder='Cook Temp' name='CookTemp'/>
  	      <select name='Temp'>
  	      	<option value='F'>Farinheit</option>
  	      	<option value='C'>Celcius</option>
  	      </select>
  	      <p className='willmake'>This Recipe will Make</p>
  	      <input id='amount' type='text' placeholder='Amount' name='servingAmount' />
  	      <input id='type' type='text' placeholder='cookies, loaves, ect' name='servingType' />
  	      <div className='TitleBit'>
        		<h5>Step</h5><span className='line' />
        	</div>
  	    </form>  
      </div>
    )
  }
}
export default AddRecipe