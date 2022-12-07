
const CategoryMenu = (props) => {
  const categories = props.products.map(product => 
    product.category  
  )
  const uniqueCategories = [...new Set(categories)]

  // console.log('Categories',categories)
  // console.log('Unique Categories',uniqueCategories)
  
  return (
    <select onChange={(e) => props.setProductCategory(e.target.value)}>
      {uniqueCategories.map(category => 
        <option key={category} value={category}>
          {category}
        </option>
      )}
    </select>
  )
}

export default CategoryMenu