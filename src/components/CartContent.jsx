import React from "react";
import './styles/cart_styles.css'

function CartContent() {
  const cartdata = {
    customPizza: [
      [ 
        {
          id: 112,
          tname: "Capsicum",
          price: 15,
          image:
            "https://thumb7.shutterstock.com/display_pic_with_logo/259963/259963,1235208469,1/stock-photo-vegetables-bulgarian-pepper-on-a-white-background-isolated-25335661.jpg",
        },
        {
          id: 114,
          tname: "Sweet corn",
          price: 38,
          image:
            "https://thumb7.shutterstock.com/display_pic_with_logo/3102608/706329457/stock-photo-sweet-corn-in-wooden-bowl-and-spoon-isolated-on-white-background-706329457.jpg",
        },
      ],
    ],
    preMadePizzas: [
      {
        id: "0006",
        type: "nonveg",
        price: "400",
        name: "Tripple Chicken Feast",
      },
    ],
  };
  return (
    <div>
      {/* TODO: show current things in art with option to increase or decrease items + same for custom made pizza   */}
      <div className='row'>
        {cartdata.customPizza && (
          <div className='col-12'>
            {cartdata.customPizza.map((itemArr, index) => {
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
                        {itemArr.map((items, index2) => {
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
          cartdata.preMadePizzas.map((item,index)=>{
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
