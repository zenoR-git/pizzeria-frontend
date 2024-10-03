import React, { useEffect, useState } from "react";

import { useDispatch } from 'react-redux'
import {addCustomPizza} from '../store/cart.mjs'


// import assets
import "./styles/pizza_maker.css";

function PizzaMaker() {
  const [total, setTotal] = useState(0);
  const [toppings,setToppings] = useState([]);
  const [selectedItems, setSelectedItem] = useState([]);

  const dispatch = useDispatch()

  function handleSubmit(toppings,total){
    let data = {
      toppings:toppings,
      price:total
    }
    dispatch(addCustomPizza(data))
  }

  useEffect(()=>{
    fetch('http://localhost:3001/api/v1/ingredients').then((res)=>{
      return res.json()
    }).then((data)=>{
      setToppings(data)
    })
  },[])

  useEffect(() => {
    console.log("aftereffects", selectedItems);
    calculateTotalCost();
  }, [selectedItems]);

  function itemHandler(event) {
    let id = event.target.value;
    if (event.target.checked) {
      //if we select the checkbox
      let selectedOne = toppings.filter((item) => {
        return item.id == id;
      });
      
      setSelectedItem([...selectedItems, ...selectedOne]);
    } else if (!event.target.checked) {
      //if we unselect the checkbox
      let newList = selectedItems.filter((item) => {
        return item.id != id;
      });
      setSelectedItem(newList);
    }
  }

  function calculateTotalCost() {
    let tempCost = 0;
    for (let index = 0; index < selectedItems.length; index++) {
      const element = selectedItems[index];
      tempCost += element.price;
    }
    console.log(tempCost);
    setTotal(tempCost);
  }

  return (
    <div className="container-fluid">
      <div className="text-center pt-4">
        Pizzeria now gives option to build your own pizza. Customize your pizza
        by choosing the ingredients from the list given below.
      </div>
      <div id="table-wrapper" className="py-4">
        <table className="table table-bordered">
          <tbody>
            {toppings.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ width: "33.3%" }}>
                    <div style={{ height: "40px" }}>
                      <img
                        style={{ height: "100%", width: "auto" }}
                        src={item.image}
                      />
                    </div>
                  </td>
                  <td style={{ width: "33.3%" }}>
                    <b>
                      <span className="m-2">{item.tname}</span>{" "}
                      <span className="m-2">&#8377; {item.price}</span>
                    </b>
                  </td>
                  <td id="add-txt" style={{ width: "33.3%" }}>
                    <input
                      type="checkbox"
                      value={item.id}
                      onChange={itemHandler}
                    />{" "}
                    Add Item
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="total-section">Total: &#8377; {total}</div>
        <div className="text-center">
          <button id="piz-btn" className="btn" onClick={()=>{handleSubmit(selectedItems,total)}}>
            Build Pizza
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaMaker;
