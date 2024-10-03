import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  resetToDefault
} from "../store/cart.mjs";

import CartContent from "./CartContent";
import "./styles/cart_styles.css";

function CartCheckout() {
  const totalPrice =
    useSelector((state) => state.cart.preMadeOverall) +
    useSelector((state) => state.cart.customPizza.totalPrice);

  const dispatch = useDispatch()

  return (
    <div id="cart-container" className="container my-5 rounded p-3">
      <div className="row g-2">
        {/*TODO:ow cart content and option to edit here */}
        <div className="col-6">
          <CartContent />
        </div>
        {/* TODO: show cart total in this section */}
        <div id="final-bill" className="col-6 rounded p-3">
          <div className="row">
            <div className="col">
              <h4>Total Amount:</h4>
            </div>
            <div className="col">
              <b>&#8377; {totalPrice}</b>
            </div>
          </div>
          <div>
            <button className="btn btn-success p-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{dispatch(resetToDefault())}}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Order Placed</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Thank you for shopping.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Contine Shopping 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCheckout;
