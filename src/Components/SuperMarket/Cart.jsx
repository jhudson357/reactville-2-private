import CartItem from './CartItem'

const Cart = (props) => {
  let totalCost = 0
  props.cart.map(item => {
    totalCost = Math.round((totalCost + (item.quantity*item.price))*100) /100
  })
  
  return (
    <div className="cart">
      <h3>Cart</h3>

      {props.cart.map(item => 
        <CartItem key={item.id} item={item} removeFromCart={props.removeFromCart}/>
      )}

      <div className="cart-total">
        <p>Total:</p>
        <p>${totalCost}</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={() => props.clearCart()}>CLEAR CART</button>
    </div>
  )
}

export default Cart