import '../../styles/burger.css'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'
import { useState } from 'react'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const addToBurger = ingredient => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = idx => {
    setStack(stack.filter((ing, i) => i !== idx))
  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} addToBurger={addToBurger}/>
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </div>
  )
}

export default BurgerShop