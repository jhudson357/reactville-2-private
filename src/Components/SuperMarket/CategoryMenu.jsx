
const CategoryMenu = (props) => {
  const categories = props.products.map(product => 
    product.category  
  )
  const uniqueCategories = [...new Set(categories)]

  console.log('Categories',categories)
  console.log('Unique Categories',uniqueCategories)
  
  return (
    <select>
      {uniqueCategories.map(category => 
        <option key={category}>
            {category}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu