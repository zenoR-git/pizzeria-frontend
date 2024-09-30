import React from 'react'

// import assets here
import './styles/pre_made_pizza_card.css'

function PreMadePizzaCard({item}) {

  return (
    <div className='card p-3'>
        <div className="row">
            <div className="col-3">
                <h4 className='text-wrap'>
                    {item.name}
                </h4>
                <div>
                <i className={"bi bi-square-fill "+(item.type=='veg'?'text-success':'text-danger')}></i>
                </div>
                <p className='my-3'>
                    {item.price}
                </p>
            </div>
            <div className="col-6">
                <div className='card-body'>
                    <p>
                    {item.description}
                    </p>
                    <p>
                    <b>Ingredients: </b> {item.ingredients}
                    </p>
                    <p>
                    <b>Toppings: </b> {item.topping}
                    </p>
                </div>
            </div>
            <div className="col-3 text-center">
                <img className='r-img-card' src={item.image} />
                <button id='btn-card' className="btn "> Add to cart </button>
            </div>
        </div>
    </div>
  )
}

export default PreMadePizzaCard