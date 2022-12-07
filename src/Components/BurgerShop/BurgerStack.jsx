import { ingredients } from "../../data/burger-data"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length ?
        props.stack.map((ingredient, idx) =>
          <Ingredient 
            key={ingredients.name}
            ingredient={ingredient}
            idx={idx}
          />
        )
        :
        <h4>No ingredients</h4>
      }
    </ul>
  )
}

export default BurgerStack