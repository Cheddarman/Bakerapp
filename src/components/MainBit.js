import React from 'react'
import MRShort from './MyRecipesShort'
import MPShort from './MyPantryShort'
import PRShort from './PublicRecipesShort'
import PopRShort from './PopularRecipesShort'
import MFRShort from './MyFavoriteRecipesShort'

class MainBit extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
				<MRShort />
				<PRShort />
				<PopRShort />
				<MFRShort />
				<MPShort />
      </div>
    )
  }
}
export default MainBit