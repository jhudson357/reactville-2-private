import Product from './Product'

const DisplayProducts = (props) => {
  
  const selectedProducts = props.products.map((product, idx) => {
    return props.productCategory === product.category &&
    <Product
      key={idx}
      product={product}
      addToCart={props.addToCart}
    />
  })
    

  return (
    <div className="product-list">
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
