import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div className="cart">
      <h3>Cart</h3>

      {props.cart.map(item => 
        <CartItem key={item.id} item={item} removeFromCart={props.removeFromCart}/>
      )}

      <div className="cart-total">
        <p>Total:</p>
        <p>$ Display Amount Here</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={() => props.clearCart()}>CLEAR CART</button>
    </div>
  )
}

export default Cart