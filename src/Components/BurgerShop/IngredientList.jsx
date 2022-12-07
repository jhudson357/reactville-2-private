import Ingredient from "./Ingredient"
import { useEffect, useState } from "react"

const IngredientList = (props) => {
	const [hasBuns, setHasBuns] = useState(false)

	useEffect(() => {
		setHasBuns(props.stack.filter(el => el.type === 'bun').length === 2)
	}, [props.stack])

	return (
		<ul>
			{props.ingredients.map(ingredient => 
				<Ingredient
					key={ingredient.name}
					ingredient={ingredient}
					isList={true}
					addToBurger={props.addToBurger}
					disabled={hasBuns && ingredient.type === 'bun'}
				/>
			)}
		</ul>
	)
}

export default IngredientList