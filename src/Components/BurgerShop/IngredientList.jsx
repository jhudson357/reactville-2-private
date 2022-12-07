import Ingredient from './Ingredient'

const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map(ingredient =>
				<Ingredient 
					key={ingredient.name}
					ingredient={ingredient}
					isList={true}
					addToBurger={props.addToBurger}
				/>
			)}
		</ul>
	)
}

export default IngredientList