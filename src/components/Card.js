import React, { useRef, useState, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Cards(props) {
  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let data = useCart(); 
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = []
    for(const item of data){
      if(item.id === props.foodItem._id){
        food = item;
        break;
      }
    }
    if(food !== []){
      if(food.size === size){
        await dispatch({type:"UPDATE", id:props.foodItem._id, price:finalPrice, qty:qty})
        return
      }
      else if(food.size !== size){
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return
      }
      return
    }
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    
    
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
   setSize(priceRef.current.value)
  }, []);//Empty to decide the first load

  return (
    <div>
      <div
        className="card py-3 m-5 rounded-1"
        style={{ width: "18rem", maxHeight: "430px", height: "430px" }}
      >
        <img
          src={props.foodItem.img}
          style={{ width: "100%", height: "50%", position: "relative" }}
          className="card-img-top position-absolute top-0"
          alt="..."
        ></img>
        <div className="card-body position-absolute top-50">
          <h5 className="card-title mt-1">{props.foodItem.name}</h5>

          <div className="container w-100">
            <select
              className="my-2 marginRight-3   h-100 w-25  bg-success rounded py-1"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="mx-3 h-100  bg-success rounded py-1"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5 ">
              ₹{finalPrice}/-
            </div>
            <hr></hr>
            <button
              className={"btn btn-success justify-center"}
              onClick={handleAddToCart}
            >
              Add to Cart !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
