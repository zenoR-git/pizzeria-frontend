import React from "react";
import './styles/cart_styles.css'

import { useSelector, useDispatch } from 'react-redux'
import {addCustomPizza,addPremadePizza,removeCustomPizza,removePremadePizza} from '../store/cart.mjs'

function CartContent() {

    const customPizza= useSelector(state=>state.cart.customPizza.items)
    const preMadePizza= useSelector(state=>state.cart.preMadePizza)

  return (
    <div>
      {/* TODO: show current things in art with option to increase or decrease items + same for custom made pizza   */}
      <div className='row'>
        {customPizza && (
          <div className='col-12'>
            {customPizza.map((itemArr, index) => {
              return (
                <div className="w-100 text-bg-secondary d-flex justify-content-between p-3" key={index}>
                  <p className='my-auto'>Custom Pizza {index+1}</p>
                  <div>
                    <div class="dropdown">
                      <button id='cart-buttons'
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Toppings
                      </button>
                      <ul class="dropdown-menu">
                        {itemArr.toppings.map((items, index2) => {
                          return (
                          
                              <li key={'items'+index2}>
                                <a class="dropdown-item" href="#">
                                  {items.tname}
                                </a>
                              </li>
                          
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {/* premade pizza section */}
        {
          preMadePizza.map((item,index)=>{
            return(
              <div className='text-bg-primary d-flex align-items-center px-3' style={{height:'80px'}}>
                <div className="text-strong">{item.name} - &#8377; {item.price}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default CartContent;
