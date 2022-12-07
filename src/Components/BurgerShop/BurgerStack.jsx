import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length ?
        props.stack.map((ingredient, idx) => 
          <Ingredient
            key={ingredient.name}
            ingredient={ingredient}
            idx={idx}
            removeFromBurger={props.removeFromBurger}
          />
        )
        :
        <h4>No Ingredients</h4>  
      }
    </ul>
  )
}

export default BurgerStack