import React, { useEffect, useState } from "react";
import PreMadePizzaCard from "./PreMadePizzaCard";

function PreMadePizza() {
  const [pizzaData,setPizzaData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/api/v1/pizza').then((res)=>{
      console.log(res)
      return res.json()
    }).then((data)=>{
      console.log(data)
      setPizzaData(data)
    })
  },[])

  return (
    <div className="container my-5" style={{width:'90%'}}>
      <div className="row g-2">
        {pizzaData.map((item) => {
          return (
            <div className="col-6">
              <PreMadePizzaCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PreMadePizza;
