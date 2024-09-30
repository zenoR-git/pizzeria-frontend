import React, { useEffect, useState } from "react";

// import assets
import "./styles/pizza_maker.css";

function PizzaMaker() {
  const [total, setTotal] = useState(0);
  let data = [
    {
      id: 101,
      tname: "Pepperoni",
      price: 110,
      image:
        "https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg",
    },
    {
      id: 102,
      tname: "Mushroom",
      price: 35,
      image:
        "https://thumb9.shutterstock.com/display_pic_with_logo/1207547/568114672/stock-photo-fresh-cultivated-button-mushrooms-and-twigs-of-parsley-in-the-wooden-basket-one-whole-mushroom-and-568114672.jpg",
    },
    {
      id: 103,
      tname: "Black beans",
      price: 45,
      image:
        "https://thumb1.shutterstock.com/display_pic_with_logo/180783430/755093356/stock-photo-black-beans-grain-on-white-background-755093356.jpg",
    },
    {
      id: 104,
      tname: "Black olive",
      price: 50,
      image:
        "https://thumb7.shutterstock.com/display_pic_with_logo/137002/244097551/stock-photo-black-cut-olive-rings-isolated-on-white-244097551.jpg",
    },
    {
      id: 105,
      tname: "Green olive",
      price: 50,
      image:
        "https://thumb7.shutterstock.com/display_pic_with_logo/4526794/639321544/stock-photo-stuffed-olives-isolated-on-white-background-639321544.jpg",
    },
    {
      id: 106,
      tname: "Jalapeno",
      price: 45,
      image:
        "https://thumb7.shutterstock.com/display_pic_with_logo/999701/250939984/stock-photo-sliced-green-jalapeno-peppers-on-white-background-250939984.jpg",
    },
    {
      id: 107,
      tname: "Chicken",
      price: 60,
      image:
        "https://thumb7.shutterstock.com/display_pic_with_logo/371512/583587001/stock-photo-fresh-raw-chicken-isolated-on-white-583587001.jpg",
    },
    {
      id: 108,
      tname: "Tomato",
      price: 20,
      image:
        "https://thumb1.shutterstock.com/display_pic_with_logo/721492/400195690/stock-photo-tomatoes-isolated-on-white-background-400195690.jpg",
    },
    {
      id: 119,
      tname: "Red peprika",
      price: 30,
      image:
        "https://thumb9.shutterstock.com/display_pic_with_logo/676765/343609895/stock-photo-chili-pepper-isolated-on-a-white-background-343609895.jpg",
    },
    {
      id: 110,
      tname: "Paneer",
      price: 45,
      image:
        "https://thumb7.shutterstock.com/display_pic_with_logo/605002/195341264/stock-photo-piece-of-cheese-or-paneer-isolated-on-a-white-background-195341264.jpg",
    },
    {
      id: 111,
      tname: "Fried Onion",
      price: 18,
      image:
        "https://thumb1.shutterstock.com/display_pic_with_logo/152950/630261116/stock-photo-delicious-crispy-fried-onion-rings-isolated-on-white-630261116.jpg",
    },
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
  ];
  const [selectedItems, setSelectedItem] = useState([]);
  useEffect(() => {
    console.log("aftereffecs", selectedItems);
    calculateTotalCost();
  }, [selectedItems]);

  function itemHandler(event) {
    let id = event.target.value;
    if (event.target.checked) {
      //if we unselect the checkbox
      let selectedOne = data.filter((item) => {
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
            {data.map((item, index) => {
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
          <button id="piz-btn" className="btn">
            Build Pizza
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaMaker;
