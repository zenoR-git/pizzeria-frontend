import React from 'react'
import CartContent from './CartContent'
import './styles/cart_styles.css'

function CartCheckout() {

  let total = 90
  return (
    <div id='cart-container' className="container my-5 rounded p-3" >
      <div className='row g-2'>
        {/*TODO:ow cart content and option to edit here */}
        <div className="col-6">
          <CartContent/>
        </div>
        {/* TODO: show cart total in this section */}
        <div id='final-bill' className="col-6 rounded p-3">
            <div className='row'>
              <div className='col'>
                 <h4>Total Amount:</h4>
              </div>
              <div className='col'>
                <b>&#8377; {total}</b>
              </div>
            </div>
            <div>
              <button className='btn btn-success p-2'>
                Place Order
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartCheckout