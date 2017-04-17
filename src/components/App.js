import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './HeadBit'
import SideNav from './SideBit'
import MainBit from './MainBit'
import AddRecipe from './AddRecipe'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <SideNav />
        <Router>
          <div className='mainbit'>
            <Route exact={true} path='/' component={MainBit}/>
            <Route path='/AddRecipe' component={AddRecipe}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default App