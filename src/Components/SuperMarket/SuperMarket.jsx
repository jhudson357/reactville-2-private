import '../../styles/super-market.css'
import { useState } from 'react'

// Components & Data
import { products } from '../../data/market-data'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

const SuperMarket = () => {
  console.log('Imported product data:::', products)
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory}/>
        <DisplayProducts products={products} productCategory={productCategory}/>
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket